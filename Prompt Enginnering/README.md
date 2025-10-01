# Prompt Enginnering

## What is prompt enginnering?

Prompt engineering is a technique or way to get consistant output from AI.

## What is prompt? (Language of LLM)

Prompt is just a text that we send to the AI.
An effect prompt is the combination of four things

1. Instruction
2. Input data
3. Context
4. Output indicator

## Zero shot prompting

It is the most simplest way to ask a question to AI.

```
SA lost 2015 ICC cricket world cup semi final. How the SA players feel?
```

## Few shot prompting

It is way to chat with AI in which we provide few examples for our question.

```
SA lost 2015 ICC cricket world cup semi final. How the SA players feel?
If SA win = Happy
If SA lose = Sad
```

## Chain of though prompting

It is a way to ask a question to AI in which after output again we ask a question (like reasoning) to get a better output.

```
SA lost 2015 ICC cricket world cup semi final. How the SA players feel?
If SA win = Happy
If SA lose = Sad

After that again we ask a question to get a better output

If players are happy = Good
If players are sad = Bad
```
