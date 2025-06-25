import { createWriteStream } from "fs";
import { Readable } from "stream";
import gemini from "@/lib/gemini";

export default async function generateVideo(prompt: string) {
  let operation = await gemini.models.generateVideos({
    model: "veo-2.0-generate-001",
    prompt: prompt,
    config: {
      personGeneration: "allow_all",
      aspectRatio: "16:9",
      durationSeconds: 8,
      numberOfVideos: 1,
    },
  });

  while (!operation.done) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    operation = await gemini.operations.getVideosOperation({
      operation: operation,
    });
  }

  operation.response?.generatedVideos?.forEach(async (generatedVideo, n) => {
    console.log(generatedVideo.video?.uri);
    const resp = await fetch(`${generatedVideo.video?.uri}&key=${process.env.GEMINI_API_KEY}`);
    const writer = createWriteStream(`video${n}.mp4`);
    Readable.fromWeb(resp.body).pipe(writer);
  });
  return {
    videoUrl: operation.response?.generatedVideos?.[0]?.video?.uri,
    message: "Video generation completed",
  };
}