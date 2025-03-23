import { connectDB } from "@/lib/utils";
import BlogModel from "@/models/BlogsModel";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const { title, excerpt, author, date, category, imageUrl, readTime, content, contentUrdu } = body;

    const slug = slugify(title, { lower: true, strict: true });

    const newBlog = new BlogModel({
      title,
      slug,
      excerpt,
      author,
      date,
      category,
      imageUrl,
      readTime,
      content,
      contentUrdu,
    });

    await newBlog.save();

    return NextResponse.json(
      { success: true, message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create blog", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const blogs = await BlogModel.find();
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch blogs", error }, { status: 500 });
  }
}
