<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { afterUpdate, each } from "svelte/internal";

	// Navbareintraege aus Datei laden mit Namen und Links
	export let brand: string;
	export let brandStatements: Array<string>;
	export let menuItems: Array<string>;
	export let floating: boolean = false;

	let navbarWidth: number;
	let navbarWidthMenu: number;
	let navbarWidthBrand: number;
	let floatingMenuItems: Array<string> = [];

	let navbarMenuItemList;

	onMount(() => {
		navbarMenuItemList = document
			.getElementById("navbar-menu")
			.getElementsByTagName("li");
	});

	afterUpdate(() => {
		// if (width container < with nav ul container) {
		// 	remove items from links list;
		// 	push last items to floatingLinks list
		// 	create after element
		// 	iterate through floatingLinks
		// }

		// trigger function only when window resized

		while (
			menuItems.length > 0 &&
			navbarWidth < navbarWidthMenu + navbarWidthBrand
		) {
			floatingMenuItems = [
				...floatingMenuItems,
				...menuItems.splice(-1, 1),
			];
			console.log("Floating: ", floatingMenuItems, "Navbar: ", menuItems);
			navbarWidthMenu =
				navbarWidthMenu - navbarWidthMenu / menuItems.length;
		}

		function appendItem(item: String) {}

		function removeItem(item: String) {}
	});
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
		<span>
			<!-- or button or span -->
			<div>more</div>
			<ul>
				<li>unvisible menu items</li>
			</ul>
		</span>
	</nav>
</div>

<style lang="scss">
	nav,
	div,
	ul {
		display: flex;
	}
	nav {
		position: fixed;
		width: 100%;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 1;

		& > div {
			width: 100%;
			border-radius: 7px;
			display: flex;
			justify-content: space-between;
			/* justify-content: space-evenly; */
			align-items: center;
			background-color: var(--bg-color);
			box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
		}
	}
	ul {
		list-style: none;
	}
	.brand {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.navbar-menu {
		flex-direction: row;
	}
	.floating {
		.navbar-wrapper {
			width: auto;
			padding: 0.3rem 3rem;
			margin: 1rem 0 0 0;
		}
	}
</style>
