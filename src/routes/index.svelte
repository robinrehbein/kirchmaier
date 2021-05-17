<script lang="ts">
  import "../app.sass";
  import SectionHeadline from "../lib/SectionHeadline/index.svelte";
  
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


<SectionHeadline>
  <p>HALLO <b>WELT</b></p>
</SectionHeadline>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />

<p>Body Main</p>
<p>{a} + {b} = {a + b}</p>

<style lang="sass">
</style>
