import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completation = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'user',
        content: `Hi, How are you? I'm Sharif Iqbal Jamil aka grimwebdeveloper.`,
      },
    ],
  });

  console.log(completation.choices[0].message);
}

main();
