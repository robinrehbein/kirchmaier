<script lang="ts">
</script>

<div>
  <div class="section-headline">
    <slot />
  </div>
</div>

<style lang="scss">
  .section-headline {
    font-size: 1.5rem;
    position: relative;
  }

  .section-headline::after {
    content: "";
    position: absolute;
    top: 1.75rem;
    width: 7rem;
    height: 0.2rem;
    background: var(--primary-color);
  }

</style>
