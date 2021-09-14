<script lang="ts">
    import Image from "$lib/util/Image/index.svelte";
    export let showImg = false;
    export let imgType = undefined;
    export let imgSrc = undefined;
    export let imgAlt = undefined;
    export let headline;
    export let text;
    export let cropText = false;
    // export let imgClassName = undefined;
</script>

<div class="card">
    {#if showImg}
        <Image src={imgSrc} alt={imgAlt} {imgType} className="card-img" />
    {/if}
    <div class="card-content">
        <h2 class="box-headline headline">{headline}</h2>
        <p class="box-text" class:cropText>{@html text}</p>
    </div>
</div>

<style lang="scss">
    .card {
        box-shadow: var(--box-shadow);
        border-radius: 0.5rem;
    }
    .card-content {
        padding: 0 2rem 2rem 2rem;
    }
    .headline {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    p {
        text-align: justify;
    }
    .cropText {
        display: -webkit-box;
        max-height: 16rem;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.625rem;
    }
    @media screen and (min-width: 960px) {
        .cropText {
            max-height: 8rem;
            -webkit-line-clamp: 5;
        }
    }
    :global(.card-img) {
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
    }
</style>
