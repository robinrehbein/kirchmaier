<script lang="ts">
	import { page } from "$app/stores";

	// Navbareintraege aus Datei laden mit Namen und Links
	export let brand: string;
	export let brandStatements: Array<string>;
	export let menuItems: Array<string>;
</script>

<div>
	<!-- // div with logo Kirchmaier or // -->
	<div>
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

		<div>
			<div>{brand}</div>
			{#if !!brandStatements}
				<div>
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
	nav,
	div,
	ul {
		display: flex;
	}
</style>
