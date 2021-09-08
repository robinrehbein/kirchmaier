<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "../lib/Navbar/index.svelte";
  import Footer from "../lib/Footer/index.svelte";
  import ContentWrapper from "../lib/util/ContentWrapper/index.svelte";
  import "../app.css";

    // load floating from json
    onMount(() => {});
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>
<ContentWrapper>
  <Navbar
    brand={"Kirchmaier & Staudacher"}
    brandStatements={[
      "Gebäudemanagement",
      "Immobilienverwaltung",
      "Projektentwicklung",
    ]}
    navbarItems={[
      "Home",
      "Services",
      "About",
      "Projects",
      "Customer",
      "Contact",
    ]}
  />

  <main>
    <slot />
  </main>

  <div style="height: 1000px;"></div>

  <Footer />
</ContentWrapper>

<style>
  html,
  body {
    font-family: var(--font-primary);
    background: var(--bg-color);
  }
</style>
