<script lang="ts">
    import { onMount } from "svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";

    type type = "img" | "picture" | "background";
    export let alt: string = undefined;
    export let src: string;
    export let imgType: type;
    export let className: string;
</script>

<IntersectionObserver let:intersecting>
    <div>
        {#if imgType === "img"}
            <img class={className} class:intersecting {src} {alt} />
        {/if}
        {#if imgType === "picture"}
            <picture class={className} class:intersecting />
        {/if}
        {#if imgType === "background"}
            <div
                class="background {className}"
                class:intersecting
                style="--img: url({src}"
            />
        {/if}
    </div>
</IntersectionObserver>

<style lang="scss">
    img {
        // background-image: var(--img);
        // width: 50%;
        object-fit: cover   ;
        object-position: center;
    }
</style>
