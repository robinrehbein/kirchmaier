<script type="ts">
  // flexDirection - extend list if needed; row is default.
  export let flexDirectionColumn = false;
  // justifyContent - extend list if needed
  export let justifyContentSpaceBetween = false;
  export let justifyContentSpaceAround = false;
  export let justifyContentSpaceEvenly = false;
  // alignItems - extend list if needed
  export let alignItemsCenter = false;
  // flexWrap; nowrap is default.
  export let flexWrapWrap = false;
  export let flexWrapWrapReverse = false;

</script>

<div
  class:flexDirectionColumn
  class:justifyContentSpaceBetween
  class:justifyContentSpaceEvenly
  class:justifyContentSpaceAround
  class:alignItemsCenter
  class:flexWrapWrap
  class:flexWrapWrapReverse
  class="flex"
>
  <slot />
</div>

<style lang="scss">
  .flex {
    display: flex;
  }

  .flexDirectionColumn {
    flex-direction: column;
  }

  .justifyContentSpaceBetween {
    justify-content: space-between;
  }

  .justifyContentSpaceEvenly {
    justify-content: space-evenly;
  }

  .justifyContentSpaceAround {
    justify-content: space-around;
  }

  .alignItemsCenter {
    align-items: center;
  }

  .flexWrapWrap {
    flex-wrap: wrap;
  }

  .flexWrapWrapReverse {
    flex-wrap: wrap-reverse;
  }

</style>
