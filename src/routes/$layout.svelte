<script lang="ts">
    import "../app.css";
    import Navbar from "../lib/Navbar/index.svelte";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<Navbar />

<slot />

<style>
</style>
