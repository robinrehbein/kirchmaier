<script type="ts">
    /* flexDirection - extend list if needed; row is default. */
    export let flexDirectionColumn = false;
    /* flexDirection responsiveness, generally based on switching at 1000px width */
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
    export let alignItemsFlexStart = false;

    /* flexWrap; nowrap is default */
    export let flexWrapWrap = false;
    export let flexWrapWrapReverse = false;

    /* gap between flex elements */
    export let gap: string = undefined;

    /* custom style */
    export let style: string = "";

    /* styles - note: the class passed has to be made available on a global level or imported to this file directly */
    let className = "";
    export { className as class };
</script>

<div
    class={`flex ${className}`}
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
    class:alignItemsFlexStart
    style={`${gap ? `gap: ${gap};` : ""} ${style}`}
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

    .alignItemsCenter {
        align-items: flex-start;
    }

    /* flexWrap classes */

    .flexWrapWrap {
        flex-wrap: wrap;
    }

    .flexWrapWrapReverse {
        flex-wrap: wrap-reverse;
    }

    @media screen and (min-width: 960px) {
        .flexDirectionResponsiveColumnToRow {
            flex-direction: row;
        }

        .flexDirectionResponsiveColumnToRowReverse {
            flex-direction: row-reverse;
        }
        .flexDirectionResponsiveRowToColumn {
            flex-direction: column;
        }

        .flexDirectionResponsiveRowToColumnReverse {
            flex-direction: column-reverse;
        }
    }
</style>
