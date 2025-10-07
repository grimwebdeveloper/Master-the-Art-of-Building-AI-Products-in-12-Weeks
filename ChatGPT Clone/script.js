const input = document.querySelector('#input');
const chatContainer = document.querySelector('#chat-container');
const askBtn = document.querySelector('#ask');

input?.addEventListener('keyup', handleEnter);
askBtn?.addEventListener('click', handleAsk);

function generate(text) {
  // 1. Append user message to UI
  // 2. Sent it to LLM
  // 3. Append llm message to UI
  const msg = document.createElement('div');
  msg.classList = `bg-blue-600 text-white p-3 rounded-xl max-w-xs lg:max-w-md`;
  msg.textContent = text;
  chatContainer.appendChild(msg);
  input.value = '';
}

function handleAsk(e) {
  const text = input.value.trim();
  if (!text) return;
  generate(text);
}

function handleEnter(e) {
  if (e.key === 'Enter') {
    const text = input.value.trim();
    generate(text);
    if (!text) return;
  }
}
