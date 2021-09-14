<script lang="ts">
    import Header from "../lib/Header/index.svelte";
    import Footer from "../lib/Footer/index.svelte";
    import "../app.css";
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <title>Kirchmaier & Staudacher</title>
</svelte:head>
<Header></Header>
<main>
    <slot />
</main>

<Footer />

<style lang="scss"></style>
