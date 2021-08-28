<script lang="ts">
	import { page } from "$app/stores";

	// Navbareintraege aus Datei laden mit Namen und Links
	export let brand: string;
	export let brandStatements: Array<string>;
	export let menuItems: Array<string>;
	let y;

	console.log(y)
</script>

<svelte:window bind:scrollY={y}/>

<div class="navbar-wrapper" class:scrolled="{y > 0}">
	<!-- // div with logo Kirchmaier or // -->
	<div class="brand-wrapper">
		<svg
			class="brand-logo"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style="isolation:isolate"
			viewBox="689 362 153 75"
			width="153pt"
			height="75pt"
			><defs
				><clipPath id="_clipPath_50HbLfdDUIK7DZgVfsHm6yKYNKCHtrC0"
					><rect x="689" y="362" width="153" height="75" /></clipPath
				></defs
			><g clip-path="url(#_clipPath_50HbLfdDUIK7DZgVfsHm6yKYNKCHtrC0)"
				><rect
					x="689"
					y="362"
					width="7"
					height="75"
					transform="matrix(1,0,0,1,0,0)"
					fill="rgb(157,161,163)"
				/><rect
					x="762"
					y="362"
					width="7"
					height="75"
					transform="matrix(1,0,0,1,0,0)"
					fill="rgb(156,160,162)"
				/><rect
					x="835"
					y="362"
					width="7"
					height="75"
					transform="matrix(1,0,0,1,0,0)"
					fill="rgb(159,162,164)"
				/><path
					d=" M 757 436.924 L 701 437 L 728.914 399.5 L 757 436.924 Z "
					fill="rgb(220,131,178)"
				/><path
					d=" M 830 399.424 L 774 399.5 L 801.914 362 L 830 399.424 Z "
					fill="rgb(220,131,178)"
				/></g
			>
		</svg>

		<div class="brand">
			<h1>{brand}</h1>
			{#if !!brandStatements}
				<div class="brand-statement">
					{#each brandStatements as brandStatement}
						<span>{brandStatement}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<nav>
		<!-- // div with logo here // -->
		<ul>
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

<style lang="scss">
	.navbar-wrapper {
		background-color: white;
		position: fixed;
		padding: 1rem;
		box-shadow: none;
		top: 0rem;
		right: 0rem;
		left: 0rem;
		border-radius: 0rem;
		transition: all 0.25s;
		z-index: 1;
	}
	.navbar-wrapper.scrolled {
		// background-color: var(--primary-color);
		box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.8), 0 8px 16px 0 rgba(204, 204 ,204, 0.8);
		top: 1rem;
		right: 1rem;
		left: 1rem;
		border-radius: 0.5rem;
	}
	nav,
	div,
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.brand-logo {
		height: 4rem;
	}
	.brand {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.brand-statement {
		gap: 1rem;
	}
	ul {
		list-style: none;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: var(--text-color);
	}
</style>
