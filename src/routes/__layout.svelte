<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "../lib/Navbar/index.svelte";
    import Footer from "../lib/Footer/index.svelte";
    import "../app.css";

    // load floating from json
    onMount(() => {});
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="content-wrapper">
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

    <div style="height: 1000px;" />

    <Footer />
</div>

<style>
    html,
    body {
        font-family: var(--font-primary);
        background: var(--bg-color);
    }

    .content-wrapper {
        max-width: 1400px;
        margin: auto;
        padding: 1.5rem;
    }

    @media screen and (min-width: 600px) {
        .content-wrapper {
            padding: 2rem 2rem;
        }
    }

    @media screen and (min-width: 800px) {
        .content-wrapper {
            padding: 2rem 2.5rem;
        }
    }

    @media screen and (min-width: 1400px) {
        .content-wrapper {
            padding: 3rem;
        }
    }

    @media screen and (min-width: 1800px) {
        .content-wrapper {
            padding: 4rem;
        }
    }
</style>
