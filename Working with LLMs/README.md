# Working with LLMs

## Invoking LLMs

```js
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'user',
        content: 'Hi, How are you?',
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
```

## System prompt

```js
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content: 'You are IQRA, my personal assistant.',
      },
      {
        role: 'user',
        content: 'Hi, what is your name?',
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
```
