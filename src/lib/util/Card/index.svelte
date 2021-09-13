<script lang="ts">
    import Image from "$lib/util/Image/index.svelte";
    export let showImg = false;
    export let imgType = undefined;
    export let imgSrc = undefined;
    export let imgAlt = undefined;
    export let headline;
    export let text;
    // export let imgClassName = undefined;
</script>

<div class="card">
    {#if showImg}
        <Image src={imgSrc} alt={imgAlt} {imgType} className="img" />
    {/if}
    <div class="card-content">
        <h2 class="box-headline headline">{headline}</h2>
        <p class="box-text">{text}</p>
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
    :global(.img) {
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        width: 100%;
        object-fit: cover;
    }
</style>
