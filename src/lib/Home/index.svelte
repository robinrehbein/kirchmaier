<script lang="ts">
    import Image from "$lib/util/Image/index.svelte";
    import { jsonContent } from "../../stores/stores";

    const heading = $jsonContent.body.landingPage.heading;
    const statements = $jsonContent.body.landingPage.statements;

    let y;
    let innerHeight;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<section id="home">
    <Image src="/web/lp-bg-lq-1.jpg" alt="" imgType="img" className="bg-image" />

    <!-- class:hidden -> if opacity is 0 or less than remove headline from dom -->
    <div
        class="wrapper"
        style="--opacity: {1 - y / (innerHeight / 3)}"
        class:hidden={1 - y / (innerHeight / 3) <= 0}
    >
        <h1>{heading}</h1>
        <div class="statements">
            {#each statements as statement}
                <span class="statement">{statement}</span>
                <span class="bullet">-</span>
            {/each}
        </div>
    </div>
    <div class="mouse" style="--opacity: {1 - y / (innerHeight / 3)}">
        <a href="#services">
            <svg
                id="mouse"
                data-name="mouse"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 42"
                ><defs
                    ><style>
                        .cls-1 {
                            fill-rule: evenodd;
                        }
                    </style></defs
                ><title>mouse</title><path
                    class="cls-1"
                    d="M2,12H2V30a10,10,0,1,0,20,0V12A10,10,0,1,0,2,12ZM0,12a12,12,0,1,1,24,0V30A12,12,0,1,1,0,30V12Z"
                /><path
                    class="cls-1"
                    d="M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z"
                /></svg
            >
        </a>
    </div>
</section>

<style lang="scss">
    #home {
        position: relative;
        height: 100vh;
        width: 100%;
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
        display: none;
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
        height: 0.25rem;
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
    .bullet {
        display: none;
    }
    .mouse {
        position: absolute;
        bottom: 5%;
        left: 50%;
        width: 20px;
        filter: invert(1);
        transform: translate(-50%, -50%);
        opacity: var(--opacity);
        transition: opacity cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
        animation: moveDown 1.5s infinite 1.5s ease-in-out;
        cursor: pointer;
    }
    :global(.bg-image) {
        position: absolute;
        height: 100%;
        width: 100%;
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
        .bullet {
            display: initial;
        }
        .bullet:last-child {
            display: none;
        }
    }
    @keyframes moveDown {
        0% {
            transform: translate(-50%, -50%);
        }
        50% {
            transform: translate(-50%, -30%);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }
</style>
