<script lang="ts">
    import Image from "$lib/util/Image/index.svelte";
    import bgImg from "../../../static/lp-bg-lq-1.jpg";
    import { jsonContent } from "../../stores/stores";

    const heading = $jsonContent.body.landingPage.heading;
    const statements = $jsonContent.body.landingPage.statements;

    let y;
    let innerHeight;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<section id="home">
    <Image src={bgImg} alt="" imgType="img" className="bg-image" />

    <div class="wrapper" style="--opacity: {1 - y / (innerHeight / 3)}" class:hidden={1 - y / (innerHeight / 3) <= 0}>
        <h1>{heading}</h1>
        <div class="statements">
            {#each statements as statement}
                <span class="statement">{statement}</span>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    #home {
        position: relative;
        height: 100vh;
        width: 100vw;
    }
    div.wrapper {
        // position: absolute;
        position: fixed;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        opacity: var(--opacity);
        transition: opacity cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    }
    .wrapper.hidden {
        display: none;;
    }
    h1 {
        font-size: 11vw;
        margin-bottom: 1rem;
        position: relative;
    }
    h1::after {
        content: "";
        position: absolute;
        left: 15%;
        top: 105%;
        // bottom: -50%;
        // transform: translate(-50%, -50%);
        width: 70%;
        height: 6px;
        background-color: var(--primary-color);
        border-radius: 0.5rem;
    }
    .statements {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 6vw;
    }
    .statement {
        margin-bottom: 0.5rem;
    }
    :global(.bg-image) {
        position: absolute;
        height: 100vh;
        width: 100vw;
        filter: brightness(0.7);
    }
    @media screen and (min-width: 960px) {
        div.wrapper {
            white-space: nowrap;
        }
        h1 {
            font-size: 6vw;
            margin-bottom: 2rem;
        }
        .statements {
            font-size: 2vw;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
