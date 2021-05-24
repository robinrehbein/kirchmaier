<script lang="ts">
</script>

<div>
  <div class="heading">
    <slot />
  </div>
</div>

<style lang="scss">
  .heading {
    font-size: 1.5rem;
    position: relative;
  }

  .heading::after {
    content: "";
    position: absolute;
    top: 1.75rem;
    width: 7rem;
    height: 0.2rem;
    background: var(--primary-color);
  }

</style>
