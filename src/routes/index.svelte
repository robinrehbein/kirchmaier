<script lang="ts">
    import Headline from "../lib/util/Headline/index.svelte";
    import Home from "$lib/Home/index.svelte"
    import Services from "$lib/Services/index.svelte"
    import Flex from "../lib/util/Flex/index.svelte";
    import Modal from "../lib/util/Modal/index.svelte";
    import Contact from "../lib/Contact/index.svelte";
    import { jsonContent } from "../stores/stores";
    import { scale } from "svelte/transition";
    import type { Content } from "src/interfaces/interfaces";

    let a = 1;
    let b = 2;
    let showModal = false;
    const ourServices = ($jsonContent as Content).body.ourServices;
</script>

<Home></Home>
<Services></Services>

<Flex
    flexDirectionColumn
    flexDirectionResponsiveColumnToRow
    justifyContentSpaceAround
    alignItemsCenter
>
    <div><p>flex 1</p></div>
    <div><p>flex 2</p></div>
</Flex>

<Headline>
    <div slot="headline">
        {@html ourServices.headline}
    </div>
    <span slot="sub-headline">{ourServices.subHeadline}</span>
</Headline>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />

<button on:click={() => (showModal = true)}> Sesam oeffne dich :) </button>

{#if showModal}
    <Modal on:close={() => (showModal = false)} transition={scale}>
        <h2 slot="headline">
            modal
            <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
        </h2>

        <ol class="definition-list">
            <li>of or relating to modality in logic</li>
            <li>
                containing provisions as to the mode of procedure or the manner
                of taking effect —used of a contract or legacy
            </li>
            <li>of or relating to a musical mode</li>
            <li>of or relating to structure as opposed to substance</li>
            <li>
                of, relating to, or constituting a grammatical form or category
                characteristically indicating predication
            </li>
            <li>of or relating to a statistical mode</li>
        </ol>

        <a href="https://www.merriam-webster.com/dictionary/modal"
            >merriam-webster.com</a
        >
    </Modal>
{/if}

<Contact />

<p>Body Main</p>
<p>{a} + {b} = {a + b}</p>

<style lang="scss">
    div {
        margin-top: 10%;
    }
</style>
