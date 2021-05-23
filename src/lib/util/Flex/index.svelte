<script type="ts">
  /* flexDirection - extend list if needed; row is default. */
  export let flexDirectionColumn = false;
  /* flexDirection responsiveness, generally based on switching at 1000px */
  export let flexDirectionResponsiveColumnToRow = false;
  export let flexDirectionResponsiveColumnToRowReverse = false;
  export let flexDirectionResponsiveRowToColumn = false;
  export let flexDirectionResponsiveRowToColumnReverse = false;

  /* justifyContent - extend list if needed */
  export let justifyContentSpaceBetween = false;
  export let justifyContentSpaceAround = false;
  export let justifyContentSpaceEvenly = false;

  /* alignItems - extend list if needed */
  export let alignItemsCenter = false;

  /* flexWrap; nowrap is default */
  export let flexWrapWrap = false;
  export let flexWrapWrapReverse = false;

</script>

<div
  class="flex"
  class:flexDirectionColumn
  class:flexDirectionResponsiveColumnToRow
  class:flexDirectionResponsiveColumnToRowReverse
  class:flexDirectionResponsiveRowToColumn
  class:flexDirectionResponsiveRowToColumnReverse
  class:justifyContentSpaceBetween
  class:justifyContentSpaceEvenly
  class:justifyContentSpaceAround
  class:alignItemsCenter
  class:flexWrapWrap
  class:flexWrapWrapReverse
>
  <slot />
</div>

<style lang="scss">
  .flex {
    display: flex;
  }

  /* flexDirection classes & responsiveness */

  .flexDirectionColumn {
    flex-direction: column;
  }

  @media screen and (min-width: 1000px) {
    .flexDirectionResponsiveColumnToRow {
      flex-direction: row;
    }

    .flexDirectionResponsiveColumnToRowReverse {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 1000px) {
    .flexDirectionResponsiveRowToColumn {
      flex-direction: column;
    }

    .flexDirectionResponsiveRowToColumnReverse {
      flex-direction: column-reverse;
    }
  }

  /* justifyContent classes */

  .justifyContentSpaceBetween {
    justify-content: space-between;
  }

  .justifyContentSpaceEvenly {
    justify-content: space-evenly;
  }

  .justifyContentSpaceAround {
    justify-content: space-around;
  }

  /* alignItems classes */

  .alignItemsCenter {
    align-items: center;
  }

  /* flexWrap classes */

  .flexWrapWrap {
    flex-wrap: wrap;
  }

  .flexWrapWrapReverse {
    flex-wrap: wrap-reverse;
  }

</style>
