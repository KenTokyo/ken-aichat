// api/chat

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";
//api key ist free to use und ip-limited, also keine env. nötig, kann ruhig public sein
const config = new Configuration({
  apiKey: "pk-lAztnOHOylWmiDCrVMmwGnvxlWsWQqxGPiPuaxETPCsyqsHB",
  basePath: "https://api.pawan.krd/pai-001-beta/v1",
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;

  // ask openai for the streaming chat coimpletion
  const response = await openai.createChatCompletion({
    model: "text-davinci-003",
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
