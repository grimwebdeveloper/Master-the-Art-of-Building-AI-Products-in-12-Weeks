const input = document.querySelector('#input');
const chatContainer = document.querySelector('#chat-container');
const askBtn = document.querySelector('#ask');

input?.addEventListener('keyup', handleEnter);
askBtn?.addEventListener('click', handleAsk);

function generate(text) {
  // 1. append message to ui
  const msg = document.createElement('div');
  msg.className = 'my-6 bg-neutral-800 p-3 rounded-xl ml-auto w-fit';
  msg.innerText = text;
  chatContainer.appendChild(msg);
  input.value = '';

  // 2. send it to the llm
  // 3. append response to the ui
}

function handleEnter(e) {
  if (e.key === 'Enter') {
    const text = input?.value.trim();
    if (!text) {
      return;
    }
    generate(text);
  }
}

function handleAsk(e) {
  const text = input?.value.trim();
  if (!text) {
    return;
  }
  generate(text);
}
