import App from './App.svelte';
import prelude from './prelude/prelude'

export default new App({
	target: document.body,
	props: {
		currentFolder: prelude,
	}
});
