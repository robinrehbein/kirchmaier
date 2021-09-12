<script lang="ts">
    import Image from "$lib/util/Image/index.svelte";
    import bgImg from "../../../static/lp-bg-lq-1.jpg";
    import { jsonContent } from "../../stores/stores";

    const heading = $jsonContent.body.landingPage.heading;
    const statements = $jsonContent.body.landingPage.statements;
</script>

<section id="home">
    <Image src={bgImg} alt="" imgType="img" className="bg-image" />

    <div class="wrapper">
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    h1,
    .statements {
        width: fit-content;
        color: white;
        // background-color: whitesmoke;
    }
    h1 {
        font-size: 5rem;
    }
    .statements {
        display: flex;
        flex-direction: row;
        font-size: 2rem;
    }
    :global(.bg-image) {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>
