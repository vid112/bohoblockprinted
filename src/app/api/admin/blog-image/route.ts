import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { connectDB } from "@/lib/db";
import { BlogImage } from "@/models/BlogImage";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;

  try {
    const file = (await request.formData()).get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Upload a JPG, PNG, or WebP image." }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Image size exceeds 5 MB." }, { status: 400 });
    }

    await connectDB();
    const image = await BlogImage.create({
      data: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
      filename: file.name,
    });

    return NextResponse.json(
      { url: `/api/blog-images/${image._id}`, storage: "database" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog image upload error:", error);
    return NextResponse.json({ error: "Blog image upload failed." }, { status: 500 });
  }
}
