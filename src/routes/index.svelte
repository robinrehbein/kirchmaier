<script lang="ts">
    import Headline from "../lib/Headline/index.svelte";
    import Flex from "../lib/util/Flex/index.svelte";
    import Modal from "../lib/util/Modal/index.svelte";
    import { jsonContent } from "../stores/stores";

    let a = 1;
    let b = 2;
    let showModal = false;

    const ourServices = $jsonContent.body.ourServices;

    // export async function load({ page, fetch, session, context }) {
    // 	const url = `/blog/${page.params.slug}.json`;
    // 	const res = await fetch(url);

    // 	if (res.ok) {
    // 		return {
    // 			props: {
    // 				article: await res.json()
    // 			}
    // 		};
    // 	}

    // 	return {
    // 		status: res.status,
    // 		error: new Error(`Could not load ${url}`)
    // 	};
    // }
</script>

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
        {ourServices.headline.headlineNormal}
        <b>{ourServices.headline.headlineBold}</b>
    </div>
    <div slot="sub-headline">{ourServices.subHeadline}</div>
</Headline>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />



<button on:click="{() => showModal = true}">
    Sesam oeffne dich :)
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			modal
			<small><em>adjective</em>  mod·al \ˈmō-dəl\</small>
		</h2>

		<ol class="definition-list">
			<li>of or relating to modality in logic</li>
			<li>containing provisions as to the mode of procedure or the manner of taking effect —used of a contract or legacy</li>
			<li>of or relating to a musical mode</li>
			<li>of or relating to structure as opposed to substance</li>
			<li>of, relating to, or constituting a grammatical form or category characteristically indicating predication</li>
			<li>of or relating to a statistical mode</li>
		</ol>

		<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
	</Modal>
{/if}

<p>Body Main</p>
<p>{a} + {b} = {a + b}</p>

<style lang="scss">
</style>
