import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content: `You're interview grade assistant. Your task to generate candidate evaluation score.
        Output must be following JSON structure:
        {
          "confidence": number(1-10 scale),
          "accuracy": number(1-10 scale),
          "pass": boolean(true or false)
        }
        The response must:
        1. Include all fields shown above,
        2. Use only the exact field names shown
        3. Follow the exact data type specified
        4. Contain only the JSON object and nothing else`,
      },
      {
        role: 'user',
        content: `Write a function highlightLongWords(sentence, length) that takes a string sentence and a number length, and returns the same sentence but wraps every word longer than length in a <span> with class "highlight".
        Example: highlightLongWords("I love developing web applications", 5);
        Ouput: I love <span class="highlight">developing</span> web <span class="highlight">applications</span>`,
      },
    ],
  });

  console.log(JSON.parse(completion.choices[0].message.content));
}

main();
