import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq with API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    // Ensure prompt is provided
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama3-8b-8192',
      temperature: 2,
      max_tokens: 8192,
      top_p: 1,
      stream: false,
      stop: null,
    });

    const responseText = chatCompletion.choices[0]?.message?.content || 'No response';

    return NextResponse.json({ responseText });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch response from Groq' }, { status: 500 });
  }
}
