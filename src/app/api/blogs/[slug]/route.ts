import { connectDB } from "@/lib/utils";
import BlogModel from "@/models/BlogsModel";
import { NextRequest, NextResponse } from "next/server";

// GET Blogs by Slug
export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();
    const { slug } = params;
  
    try {
        const blog = await BlogModel.findOne({ slug });

        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch blog", error },
            { status: 500 }
        );
    }
}

// DELETE Blog by Slug
export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();
    const { slug } = params;

    try {
        const deletedBlog = await BlogModel.findOneAndDelete({ slug });

        if (!deletedBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Blog deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
      return NextResponse.json(
            { success: false, message: "Failed to delete blog", error },
            { status: 500 }
        );
    }
}

// PUT Blog Update by Slug
export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
    await connectDB();
    try {
        const body = await req.json();

        const updatedBlog = await BlogModel.findOneAndUpdate(
            { slug: params.slug },
            body,
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Blog updated successfully", blog: updatedBlog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to update blog", error },
            { status: 500 }
        );
    }
}
