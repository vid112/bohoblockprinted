import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import { BlogImage } from "@/models/BlogImage";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) {
    return new NextResponse("Image not found", { status: 404 });
  }

  await connectDB();
  // Keep this as a Mongoose document. A lean query can expose a MongoDB Binary
  // wrapper for Buffer fields, which produced an empty Uint8Array response.
  const image = await BlogImage.findById(id).select("data contentType").exec();
  if (!image?.data?.length) {
    return new NextResponse("Image not found", { status: 404 });
  }

  const data = new Uint8Array(image.data);

  return new NextResponse(data, {
    headers: {
      "Content-Type": image.contentType,
      "Content-Length": String(data.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
