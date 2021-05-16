<script lang="ts">
  import Navbar from "../lib/Navbar/index.svelte";
  import SectionHeadline from "../lib/SectionHeadline/index.svelte";

</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<Navbar />
<SectionHeadline>
  <p>HALLO <b>WELT</b></p>
</SectionHeadline>

<main>
  <slot />
</main>

<footer>
  <p>Made with ❤ by programr</p>
</footer>

<style>
</style>
