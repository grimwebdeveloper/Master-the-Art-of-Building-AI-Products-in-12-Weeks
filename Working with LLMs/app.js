import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    temperature: 1,
    top_p: 1,
    stop: null,
    max_completion_tokens: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    messages: [
      {
        role: 'system',
        content:
          'You are IQRA, a smart review analyst. Your task is to analyze and given review and sentiment. Classify the review as positive, netural, or negative. Output must be in single word.',
      },
      {
        role: 'user',
        content: `Review: These headphones arrived quickly and look great, but the left earcup stopped working after a week.
        Sentiment: ?`,
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
