<script lang="ts">
	import { crossfade, scale } from "svelte/transition";

	export let imageSrcs: Array<string>;
	const imageBasePath: string = "/web/";

	const [send, receive] = crossfade({
		duration: 200,
		fallback: scale,
	});

	let selected = null;
	let loading = null;

	const load = (imageSrc) => {
		const timeout = setTimeout(() => (loading = imageSrc), 100);

		const img = new Image();

		img.onload = () => {
			selected = imageSrc;
			clearTimeout(timeout);
			loading = null;
		};

		img.src = `${imageBasePath}/${imageSrc}.jpg`;
	};
</script>

<div class="container">
	<div class="phone">
		<h1>Photo gallery</h1>

		<div class="grid">
			{#each imageSrcs as imageSrc}
				<div class="square">
					{#if selected !== imageSrc}
						<button
							on:click={() => load(imageSrc)}
							in:receive={{ key: imageSrc }}
							out:send={{ key: imageSrc }}
							>{loading === imageSrc ? "..." : imageSrc}</button
						>
					{/if}
				</div>
			{/each}
		</div>

		{#if selected}
			{#await selected then d}
				<div
					class="photo"
					in:receive={{ key: d }}
					out:send={{ key: d }}
				>
					<img
						alt={d}
						src="{imageBasePath}/{d}"
						on:click={() => (selected = null)}
					/>
				</div>
			{/await}
		{/if}
	</div>
</div>

<style>
	.container {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.phone {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 52vmin;
		height: 76vmin;
		border: 2vmin solid #ccc;
		border-bottom-width: 10vmin;
		padding: 3vmin;
		border-radius: 2vmin;
	}

	h1 {
		font-weight: 300;
		text-transform: uppercase;
		font-size: 5vmin;
		margin: 0.2em 0 0.5em 0;
	}

	.grid {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 2vmin;
	}

	button {
		width: 100%;
		height: 100%;
		color: white;
		font-size: 5vmin;
		border: none;
		margin: 0;
		will-change: transform;
	}

	.photo,
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.photo {
		display: flex;
		align-items: stretch;
		justify-content: flex-end;
		flex-direction: column;
		will-change: transform;
	}

	img {
		object-fit: cover;
		cursor: pointer;
	}

	.credit {
		text-align: right;
		font-size: 2.5vmin;
		padding: 1em;
		margin: 0;
		color: white;
		font-weight: bold;
		opacity: 0.6;
		background: rgba(0, 0, 0, 0.4);
	}

	.credit a,
	.credit a:visited {
		color: white;
	}
</style>
