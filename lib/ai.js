import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function chatCompletion(messages) {
  const prompt = messages.map((m) => m.content).join("\n");
  const result = await model.generateContent(prompt);
  return result.response.text();
}
