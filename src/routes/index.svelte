<script lang="ts">
  import Headline from "../lib/Headline/index.svelte";
  import Flex from "../lib/util/Flex/index.svelte";
  import { jsonContent } from "../stores/stores";

  let a = 1;
  let b = 2;

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
    {@html ourServices.headline}
  </div>
  <span slot="sub-headline">{ourServices.subHeadline}</span>
</Headline>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />

<p>Body Main</p>
<p>{a} + {b} = {a + b}</p>

<style lang="scss">
  div {
    margin-top: 10%;
  }

</style>
