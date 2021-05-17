<script lang="ts">
	import { page } from '$app/stores';

	// Navbareintraege aus Datei laden mit Namen und Links 
	export let brand;
	export let brandStatements;
	export let links;
	export let floating = false;
</script>

<nav>
	<div class="navbar-content-wrapper">
		<svg class="navbar-content-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="689 362 153 75" width="153pt" height="75pt"><defs><clipPath id="_clipPath_50HbLfdDUIK7DZgVfsHm6yKYNKCHtrC0"><rect x="689" y="362" width="153" height="75"/></clipPath></defs><g clip-path="url(#_clipPath_50HbLfdDUIK7DZgVfsHm6yKYNKCHtrC0)"><rect x="689" y="362" width="7" height="75" transform="matrix(1,0,0,1,0,0)" fill="rgb(157,161,163)"/><rect x="762" y="362" width="7" height="75" transform="matrix(1,0,0,1,0,0)" fill="rgb(156,160,162)"/><rect x="835" y="362" width="7" height="75" transform="matrix(1,0,0,1,0,0)" fill="rgb(159,162,164)"/><path d=" M 757 436.924 L 701 437 L 728.914 399.5 L 757 436.924 Z " fill="rgb(220,131,178)"/><path d=" M 830 399.424 L 774 399.5 L 801.914 362 L 830 399.424 Z " fill="rgb(220,131,178)"/></g></svg>
		<!-- <div class="navbar-content-logo"></div> -->
		<div class="navbar-content">
			<p>{brand}</p>
			{#if !!brandStatements}
				<ul class="brand-statement-list">
					{#each brandStatements as brandStatement}
						<li class="brand-statement-list-item">
							<p>{brandStatement}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="navbar-list-wrapper">
		<ul class="navbar-list">
			{#each links as link}
				<li class="navbar-list-item" class:active={$page.path === ('#' + link)}>
					<a sveltekit:prefetch href="${'/' + link}">
						{link}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="sass">
ul
	list-style: none
	margin: 0
	padding: 0
nav
	position: fixed
	top: 0
	right: 0
	left: 0
	box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05)

	.navbar-content-wrapper
		display: flex

		.navbar-content
			display: flex
			flex-direction: column
			justify-content: center
			align-items: flex-start

			.brand-statement-list
				display: flex
</style>
