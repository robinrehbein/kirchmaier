<script lang="ts">
	import { page } from '$app/stores';

	// Navbareintraege aus Datei laden mit Namen und Links 
	const links = ['Home', 'Services', 'About', 'Projects', 'Customer', 'Contact']
</script>

<nav>
	<div>
		<svg>Logo</svg>
		<div>
			<p>Kirchmaier & Staudacher</p>
			<div>
				<span>Gebäudemanagement</span>
				<span>Immobilienverwaltung</span>
				<span>Projektentwicklung</span>
			</div>
		</div>
	</div>
	<ul>
		{#each links as link}
			<li class:active={$page.path === ('/' + link)}><a sveltekit:prefetch href="${'/' + link}">{link}</a></li>
		{/each}
	</ul>
</nav>

<style>
</style>
