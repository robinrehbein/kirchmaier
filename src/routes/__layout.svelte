<script context="module" lang="ts">
  import Header from "../lib/Header/index.svelte";
  import Footer from "../lib/Footer/index.svelte";
  import "../app.css";

  // export const prerender = true;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <title>Kirchmaier & Staudacher</title>
</svelte:head>
<Header />
<main>
  <slot />
</main>

<Footer />

<style lang="scss"></style>
