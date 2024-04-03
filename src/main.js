import { workers } from "@raydiant/sdk";

const perchviewDiv = document.querySelector('#perchview');
workers.subscribe('perchview', (state) => {
	perchviewDiv.textContent = JSON.stringify(state, null, '  ');
});

const aiDiv = document.querySelector('#ai');
workers.subscribe('ai-realtime', (state) => {
	aiDiv.textContent = JSON.stringify(state, null, '  ');
});