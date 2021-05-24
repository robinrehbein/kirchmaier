<script lang="ts">
  import Heading from "../lib/Heading/index.svelte";
  import Flex from "../lib/util/Flex/index.svelte";

  let a = 1;
  let b = 2;

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

<Flex flexDirectionColumn justifyContentSpaceAround alignItemsCenter>
  <div><p>flex 1</p></div>
  <div><p>flex 2</p></div>
</Flex>

<Heading>
  <p>HALLO <b>WELT</b></p>
</Heading>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />

<p>Body Main</p>
<p>{a} + {b} = {a + b}</p>

<style lang="scss">
  div {
    background-color: red;
  }

</style>
