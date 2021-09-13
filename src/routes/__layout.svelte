<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "../lib/Navbar/index.svelte";
  import Footer from "../lib/Footer/index.svelte";
  import { jsonContent } from "../stores/stores";
  import "../app.css";

  // load floating from json
  onMount(() => {});
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<!-- <div class="content-wrapper"> -->
<Navbar
  brand={"Kirchmaier & Staudacher"}
  navbarItems={$jsonContent.navbar.items}
/>

<main>
  <slot />
</main>

<Footer />

<!-- </div> -->
<style>
  html,
  body {
    font-family: var(--font-primary);
    background: var(--bg-color);
  }
  /* 
    .content-wrapper {
        max-width: 1400px;
        margin: auto;
        padding: 1.5rem;
    }

    @media screen and (min-width: var(--min-width)) {
        .content-wrapper {
            padding: 2rem 2rem;
        }
    } */
</style>
