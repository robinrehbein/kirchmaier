<script lang="ts">
</script>

<div class="content-wrapper">
  <slot />
</div>

<style lang="scss">
  .content-wrapper {
    max-width: 1600px;
    margin: auto;
    padding: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    .content-wrapper {
      padding: 2rem 2rem;
    }
  }

  @media screen and (min-width: 800px) {
    .content-wrapper {
      padding: 2rem 2.5rem;
    }
  }

  @media screen and (min-width: 1400px) {
    .content-wrapper {
      padding: 3rem;
    }
  }

  @media screen and (min-width: 1800px) {
    .content-wrapper {
      padding: 4rem;
    }
  }
</style>
