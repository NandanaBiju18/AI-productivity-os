import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

export const generateAIPlan = async (tasks) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const prompt = `
You are a smart productivity AI.

Create an optimized daily schedule for a student.

Rules:
- Prioritize high urgency tasks
- Balance workload
- Use time blocks (9AM–9PM)
- Keep output structured

Tasks:
${tasks
  .map(
    (t) =>
      `Task: ${t.name}, Priority: ${t.priority}, Deadline: ${t.deadline}, Duration:
${t.estimatedHours || 0}h
${t.estimatedMinutes || 0}m`
  )
  .join("\n")}

Return JSON only like:
{
  "schedule": [
    { "time": "9:00-10:00", "task": "..." }
  ],
  "tips": ["..."]
}
`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};