import Groq from 'groq-sdk';
import { config } from 'dotenv';

config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
	const completion = await groq.chat.completions.create({
		model: 'llama-3.3-70b-versatile',
		temperature: 0,
		messages: [
			{
				role: 'system',
				content: `You're dev my assistant.
        You have access following tools:
        1. searchWeb({query}: {query: string}) // Search the latest information and realtime data on the internet.`,
			},
			{
				role: 'user',
				content: `When was iphone 16 launched?`,
			},
		],
		tools: [
			{
				type: 'function',
				function: {
					name: 'webSearch',
					description:
						'Search the latest information and realtime data on the internet.',
					parameters: {
						type: 'object',
						properties: {
							query: {
								type: 'string',
								description: 'The search query to perform search on',
							},
						},
						required: ['query'],
					},
				},
			},
		],
		tool_choice: 'auto',
	});

	const toolCalls = completion.choices[0].message.tool_calls;

	if (!toolCalls) {
		console.log('IQRA: ', completion.choices[0].message.content);
		return;
	}

	for (const tool of toolCalls) {
		console.log('Tool', tool);
		const functionName = tool.function.name;
		const functionParams = tool.function.arguments;

		if (functionName == 'webSearch') {
			const toolResult = await webSearch(JSON.parse(functionParams));
			console.log('Tool Result: ', toolResult);
		}
	}

	// console.log(completion.choices[0].message.tool_calls);
}

main();

function webSearch(query) {
	console.log('Calling web search...');
	return 'Iphone was launched on 20 september 2024';
}
