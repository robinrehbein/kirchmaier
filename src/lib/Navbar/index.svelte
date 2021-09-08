<script lang="ts">
	import { page } from "$app/stores";

	// Navbareintraege aus Datei laden mit Namen und Links
	export let brand: string;
	export let brandStatements: Array<string>;
	export let menuItems: Array<string>;
	let y;
	let active = false;
</script>

<svelte:window bind:scrollY={y} />

<div class="relative">
	<div class="navbar-wrapper" class:scrolled={y > 50} class:active>
		<!-- // div with logo Kirchmaier or // -->
		<div class="brand-wrapper">
			<svg
				class="brand-logo"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="isolation:isolate"
				viewBox="0 0 102 50"
				width="102pt"
				height="50pt"
				><defs
					><clipPath id="_clipPath_CDm95qyi8ceqeNkoTXVDhNjNN32NG4f9"
						><rect width="102" height="50" /></clipPath
					></defs
				><g clip-path="url(#_clipPath_CDm95qyi8ceqeNkoTXVDhNjNN32NG4f9)"
					><rect
						width="102"
						height="50"
						style="fill:rgb(0,0,0)"
						fill-opacity="0"
					/><clipPath id="_clipPath_F4W9GkP635I59phimjSWCTxIIPHWhVjj"
						><rect
							x="0"
							y="0"
							width="102"
							height="50"
							transform="matrix(1,0,0,1,0,0)"
							fill="rgb(255,255,255)"
						/></clipPath
					><g
						clip-path="url(#_clipPath_F4W9GkP635I59phimjSWCTxIIPHWhVjj)"
						><g
							><rect
								x="0"
								y="0"
								width="4.667"
								height="50"
								transform="matrix(1,0,0,1,0,0)"
								fill="rgb(157,161,163)"
							/><rect
								x="48.667"
								y="0"
								width="4.667"
								height="50"
								transform="matrix(1,0,0,1,0,0)"
								fill="rgb(156,160,162)"
							/><rect
								x="97.333"
								y="0"
								width="4.667"
								height="50"
								transform="matrix(1,0,0,1,0,0)"
								fill="rgb(159,162,164)"
							/><path
								d=" M 45.333 49.949 L 8 50 L 26.609 25 L 45.333 49.949 Z "
								fill="rgb(220,131,178)"
							/><path
								d=" M 94 24.949 L 56.667 25 L 75.276 0 L 94 24.949 Z "
								fill="rgb(220,131,178)"
							/></g
						></g
					></g
				></svg
			>

			<div class="brand">
				<h1 class="brand-name">{brand}</h1>
				{#if !!brandStatements}
					<div class="brand-statements">
						{#each brandStatements as brandStatement}
							<span class="brand-statement">{brandStatement}</span
							>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<nav class="navbar">
			<!-- responsive menu -->
			<svg
				on:click={() => (active = !active)}
				class="arrow"
				class:active
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#000000"
				><path d="M0 0h24v24H0V0z" fill="none" /><path
					d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
				/></svg
			>

			<ul class="navbar-menu" class:active>
				{#each menuItems as menuItem}
					<li
						class="navbar-menu-item"
						class:active={$page.path === "#" + menuItem}
					>
						<a sveltekit:prefetch href="${'/' + menuItem}">
							{menuItem}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>

<style lang="scss">
	a {
		text-decoration: none;
		color: var(--text-color);
	}
	.navbar-wrapper {
		background-color: white;
		position: fixed;
		padding: 2rem 3rem;
		box-shadow: none;
		top: 0rem;
		right: 0rem;
		left: 0rem;
		max-width: 100%;
		border-radius: 0rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
		z-index: 1;
	}
	.navbar-wrapper.scrolled {
		// background-color: var(--primary-color);
		box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.8),
			0 8px 16px 0 rgba(204, 204, 204, 0.8);
		top: 0rem;
		right: 0rem;
		left: 0rem;
		bottom: 0rem;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
	}
	.navbar-wrapper.active {
		// background-color: var(--primary-color);
		box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.8),
			0 8px 16px 0 rgba(204, 204, 204, 0.8);
		top: 1rem;
		right: 1rem;
		left: 1rem;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
	}
	.brand-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.brand-logo {
		width: 5rem;
	}
	.brand {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-transform: uppercase;
		gap: 0.25rem;
	}
	.brand-name {
		font-size: 1rem;
	}
	.brand-statements {
		font-size: 0.7rem;
		display: none;
	}
	.brand-statement::after {
		content: "-";
		padding-left: 1rem;
		padding-right: 1rem;
		// display: none;
	}
	.brand-statement:last-child:after {
		display: none;
	}
	.relative {
		position: relative;
	}
	.arrow {
		cursor: pointer;
		transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.arrow.active {
		transform: rotate(180deg);
		transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.navbar-menu {
		display: none;
		list-style: none;
		position: absolute;
		left: 50%;
	}
	.navbar-menu.active {
		display: initial;
	}
</style>
