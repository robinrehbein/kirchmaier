<script lang="ts">
    type type = "img" | "picture" | "background";
    export let imgType: type;
    export let intersecting: boolean;
    export let alt: string;
</script>
{#if imgType === "img"}
    <img src="" alt="{alt}" class:intersecting />
{/if}
{#if imgType === "picture"}
    <picture class:intersecting></picture>
{/if}
{#if imgType === "background"}
    <div class:intersecting></div>
{/if}