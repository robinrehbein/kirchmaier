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
      <button class="button button-left" on:click={() => prevImage()}>&leftarrow;</button>
      <button class="button button-right" on:click={() => nextImage()}>&rightarrow;</button>
  {/if}
</div>

<style lang="scss">
  .gallery {
    position: relative;
  }
  .gallery-image {
    max-width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .button {
    position: absolute;
    top: 50%;
    width: 35px;
    transform: translateY(-50%);
    padding: 0.5rem;

    &-left {
      left: 0.5rem;
    }
    &-right {
      right: 0.5rem;
    }
  }

.button:hover {
    transform: translateY(-50%);
}

.button-left:hover {
      left: 0;
    }
.button-right:hover {
      right: 0;
    }

</style>
