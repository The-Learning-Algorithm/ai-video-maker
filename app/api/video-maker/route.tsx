import { NextRequest, NextResponse } from "next/server";
import generateVideo from "@/app/utils/vide-maker";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }
  const response = await generateVideo(prompt);
  return NextResponse.json(response, { status: 200 });
}