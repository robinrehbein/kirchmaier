<script lang="ts">
    import { onMount } from 'svelte';
    export let once = false;
    export let top = -100;
    export let bottom = 0;
    export let left = 0;
    export let right = 0;
    export let className = undefined;
    let intersecting = false;
    let container;
  
    onMount(() => {
      if (typeof IntersectionObserver !== 'undefined') {
        const rootMargin = `${top}px ${right}px ${bottom}px ${left}px`;
        const observer = new IntersectionObserver(entries => {
          intersecting = entries[0].isIntersecting;
          if (intersecting && once) {
            observer.unobserve(container);
          }
          }, {
            rootMargin
        });
          observer.observe(container);
          return () => observer.unobserve(container);
    }
  
    function handler() {
      const bcr = container.getBoundingClientRect();
      intersecting = (
        (bcr.bottom + bottom) > 0 &&
        (bcr.right + right) > 0 &&
        (bcr.top - top) < window.innerHeight &&
        (bcr.left - left) < window.innerWidth
      );
      if (intersecting && once) {
        window.removeEventListener('scroll', handler);
      }
    }
  
    window.addEventListener('scroll', handler);
      return () => window.removeEventListener('scroll', handler);
    });
  </script>
  
  <style lang="scss"></style>
  
  <div bind:this={container} class={className}>
    <slot {intersecting}></slot>
  </div>