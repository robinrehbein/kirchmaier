<script lang="ts">
  import { crossfade, scale } from "svelte/transition";
  import { onMount } from "svelte";

  export let imageSrcs: string[];
  const imageBasePath: string = "/web";

  const [send, receive] = crossfade({
    duration: 200,
    fallback: scale,
  });

  let selected = imageSrcs[0];
  let loading = null;

  console.log(imageSrcs);

  const load = (imageSrc) => {
    const timeout = setTimeout(() => (loading = imageSrc), 100);

    const img = new Image();

    img.onload = () => {
      selected = imageSrc;
      clearTimeout(timeout);
      loading = null;
    };

    img.src = `${imageBasePath}/${imageSrc}`;

    console.log(img.src);
  };
</script>

<div class="gallery">
  <div class="phone">
    <!-- <h1>Photo gallery</h1> -->

    {#if selected}
      {#await selected then d}
        <div class="photo" in:receive={{ key: d }} out:send={{ key: d }}>
          <img
            alt={d}
            src="{imageBasePath}/{d}"
            on:click={() => (selected = null)}
          />
        </div>
      {/await}
    {/if}

    <ul>
      {#each imageSrcs as imageSrc}
        <li
          on:click={() => load(imageSrc)}
          in:receive={{ key: imageSrc }}
          out:send={{ key: imageSrc }}
        >
          <img src={`${imageBasePath}/${imageSrc}`} alt={imageSrc} />
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    list-style: none;
    overflow-x: scroll;
    justify-content: center;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  li {
    img {
      height: 5rem;
      width: 7rem;
    }
  }
</style>
