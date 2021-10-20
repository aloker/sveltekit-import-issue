import { readable, Readable } from 'svelte/store';

// CHANGE PREVIOUS LINE TO THIS TO MAKE IT WORK

// import {readable} from 'svelte/store';
// import type {readable} from 'svelte/store';

export const timeStore: Readable<Date> = readable(new Date(), (set) => {
	const timerId = setInterval(() => set(new Date()), 1000);
	return () => {
		clearInterval(timerId);
	};
});
