<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "../lib/Navbar/index.svelte";
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
    navbarMenuItems={["Home", "Services", "About", "Projects", "Customer", "Contact"]}
    {floating}
/>

<main>
    <slot />
</main>
<footer>
    <p>Made with ❤ by programr</p>
</footer>

<style>
    html,
    body {
        font-family: var(--font-primary);
        background: var(--bg-color);
    }
</style>
