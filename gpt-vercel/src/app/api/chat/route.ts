// api/chat

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: "pk-lAztnOHOylWmiDCrVMmwGnvxlWsWQqxGPiPuaxETPCsyqsHB",
  basePath: "https://api.pawan.krd/v1",
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

// curl --location 'https://api.pawan.krd/v1/chat/completions' \
// --header 'Authorization: Bearer pk-***[OUR_API_KEY]***' \
// --header 'Content-Type: application/json' \
// --data '{
//     "model": "pai-001-light-beta",
//     "max_tokens": 100,
//     "messages": [
//         {
//             "role": "system",
//             "content": "You are an helpful assistant."
//         },
//         {
//             "role": "user",
//             "content": "Who are you?"
//         }
//     ]
// }'
