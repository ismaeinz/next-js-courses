import Post from "@/models/Post";
import { connect } from "@/util/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("DB ERROR", { status: 500 });
  }
};
