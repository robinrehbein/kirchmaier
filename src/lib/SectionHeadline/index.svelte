<script lang="ts">
</script>

<div class="section-headline">
  <slot name="headline" />
</div>
<div class="sub-headline">
  <slot name="sub-headline" />
</div>

<style lang="scss">
  .section-headline {
    font-size: 1.6rem;
    position: relative;
    margin: 0.7rem 0rem;
  }

  .section-headline::after {
    content: "";
    position: absolute;
    top: 1.75rem;
    width: 7rem;
    height: 0.2rem;
    background: var(--primary-color);
  }

  .sub-headline {
    font-size: 1.05rem;
  }

</style>
