<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";
	import { fade } from "svelte/transition";


	// boolean here right as type?
	const dispatch = createEventDispatcher<{close: boolean}>();
	const close = () => dispatch("close");

	export let transition = fade;
	let modal;

	const handle_keydown = (e) => {
		if (e.key === "Escape") {
			close();
			return;
		}

		if (e.key === "Tab") {
			// trap focus
			const nodes: Array<any> = modal.querySelectorAll("*");
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};


	// type of Element but Element doesnt contain focus because focus is an htmlelement function
	const previously_focused: HTMLElement =
		typeof document !== "undefined" && <HTMLElement>document.activeElement as HTMLElement; // cast element to htmlelement

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} transition:transition>
	<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
		<!-- Show Headline -->
		<slot name="headline" />
		<hr />
		<!-- Show Content  -->
		<slot />
		<hr />

		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={close}>Schliesse Sesam</button>
	</div>
</div>

<style lang="scss">
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 100;
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		max-width: calc(100vw - 4em);
		max-height: calc(100vh - 4em);
		transform: translate(-50%, -50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	button {
		display: block;
	}
</style>
