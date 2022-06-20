<script lang="ts">
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
    draw,
    crossfade,
  } from "svelte/transition";

  export let imageSrcs: string[];

  let currentSlideItem = 0;

  const imgBasePath = "/web/";

  const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % imageSrcs.length;
  };

  const prevImage = () => {
    if (currentSlideItem != 0) {
      currentSlideItem = (currentSlideItem - 1) % imageSrcs.length;
    } else {
      currentSlideItem = imageSrcs.length - 1;
    }
  };
</script>

<div class="gallery">
  {#each [imageSrcs[currentSlideItem]] as item (currentSlideItem)}
    <img
      class="gallery-image"
      in:fade
      src={`${imgBasePath}${item}`}
      alt={item}
    />
  {/each}
  {#if imageSrcs.length > 1}
    <div class="switch-img-button-wrapper">
      <button class="button" on:click={() => prevImage()}>Previous</button>
      <button class="button" on:click={() => nextImage()}>Next</button>
    </div>
  {/if}
</div>

<style lang="scss">
  .gallery-image {
    max-width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .switch-img-button-wrapper {
    padding: 1rem 2rem 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .button {
    margin-right: 4rem;
    padding: 0.5rem;
  }
  .button:last-child {
    margin-right: 0;
  }
</style>
