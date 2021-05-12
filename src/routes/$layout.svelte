<script lang="ts">
    import "../app.css";
    import Navbar from "../lib/Navbar/index.svelte";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<Navbar />

<main>
	<slot />
</main>

<footer>
	<p>Made with ❤ by programr</p>
</footer>

<style>
</style>
