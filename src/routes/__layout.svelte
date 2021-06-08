<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "../lib/Navbar/index.svelte";
    import Header from "../lib/Header/index.svelte";
    import Footer from "../lib/Footer/index.svelte";
    import "../app.css";

    let floating: boolean = false;

    // load floating from json
    onMount(() => {});
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<Navbar
    brand={"Kirchmaier & Staudacher"}
    brandStatements={[
        "Gebäudemanagement",
        "Immobilienverwaltung",
        "Projektentwicklung",
    ]}
    menuItems={["Home", "Services", "About", "Projects", "Customer", "Contact"]}
    {floating}
/>

<!-- <Header /> -->

<main>
    <slot />
</main>

<Footer />

<style>
    html,
    body {
        font-family: var(--font-primary);
        background: var(--bg-color);
    }
</style>
