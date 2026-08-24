import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlogImage extends Document {
  data: Buffer;
  contentType: string;
  filename: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogImageSchema = new Schema<IBlogImage>(
  {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    filename: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const BlogImage: Model<IBlogImage> =
  mongoose.models.BlogImage || mongoose.model<IBlogImage>("BlogImage", BlogImageSchema);
