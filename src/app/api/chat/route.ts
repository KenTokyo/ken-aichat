// api/chat

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: "pk-lAztnOHOylWmiDCrVMmwGnvxlWsWQqxGPiPuaxETPCsyqsHB",
  basePath: " https://api.pawan.krd/pai-001-light-beta/v1",
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;

  // ask openai for the streaming chat coimpletion
  const response = await openai.createChatCompletion({
    model: "pai-001-light-beta",
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
