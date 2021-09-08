<script lang="ts"></script>

<div class="headline">
  <slot name="headline" />
</div>
<div class="sub-headline">
  <slot name="sub-headline" />
</div>

<style lang="scss">
  .headline {
    font-size: 1.6rem;
    position: relative;
    margin: 0.7rem 0rem;
  }

  .headline::after {
    content: "";
    position: absolute;
    top: 1.9rem;
    width: 9rem;
    height: 0.25rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
  }

  .sub-headline {
    font-size: 1.05rem;
  }
</style>
