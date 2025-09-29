import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completation = await groq.chat.completions.create({
    temperature: 1,
    // top_p: 1,
    // stop: '7',
    // max_completion_tokens: 5,
    // frequency_penalty: 0,
    
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system', 
        content: `You are Jarvis.`,
      },
      {
        role: 'user',
        content: `How are you?`,
      },
    ],
  });

  // console.log(completation);
  console.log(completation.choices[0].message);
}

main();
