<script lang="ts">
  import Navbar from "../lib/Navbar/index.svelte";

</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<Navbar brand = {'Kirchmaier & Staudacher'} brandStatements = {['Gebäudemanagement', 'Immobilienverwaltung', 'Projektentwicklung']} links = {['Home', 'Services', 'About', 'Projects', 'Customer', 'Contact']} />

<main>
  <slot />
</main>

<footer>
  <p>Made with ❤ by programr</p>
</footer>

<style lang="sass">
main
    margin-top: 20rem
</style>
