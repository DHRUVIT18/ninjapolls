import { writable } from "svelte/store";

const PollStore = writable([
    {
		id:1,
		question:'python or java',
		answerA:'python',
		answerB:'java',
		votesA:9,
		votesB:15,
	},

]);

export default PollStore


