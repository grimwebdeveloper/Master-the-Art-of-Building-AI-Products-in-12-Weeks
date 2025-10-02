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

## LLM settings

| Parameter                 | Kya karta hai                                     | Use                                                         | Analogy (Trading/Daily Life)                                              | Quick Tip                      |
| ------------------------- | ------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| **temperature**           | AI ka randomness/creativity control karta hai     | High → zyada creative; Low → safe/predictable               | Trading: Low = safe stocks, High = high-risk stocks                       | Low = safe, High = crazy ideas |
| **top_p**                 | AI ke probable words/ideas ka limit set karta hai | High → all possibilities; Low → only popular/common options | Pizza order: Top popular flavors hi try karo ya sab flavors consider karo | Probability filter             |
| **stop**                  | AI ko output dena kab stop karna hai              | Stop token ya phrase define karte ho                        | Juice glass example: “Stop after 1 glass”                                 | Define your end point          |
| **max_completion_tokens** | AI kitne words/tokens likh sakta hai ek baar me   | Limit output length                                         | Trading session: Max $1000 invest kar sakte ho                            | Output ka limit                |
| **frequency_penalty**     | Repeat words/phrases penalize karta hai           | High → same words kam use                                   | Friend se baat: Baar-baar “awesome” bolna avoid                           | Avoid repetition of words      |
| **presence_penalty**      | Repeat concepts/ideas penalize karta hai          | High → AI naye ideas try karega                             | Stock: Already invested, AI suggest na kare                               | Encourage new ideas            |
