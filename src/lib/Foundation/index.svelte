<script lang="ts">
    import Card from "../util/Card/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import Image from "../util/Image/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Headline from "../util/Headline/index.svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import type { Box } from "../../interfaces/interfaces";
    import { scale } from "svelte/transition";

    const foundation = $jsonContent.body.foundation;
    const imgBasePath = "/web/";

    let showModal = false;
    let currentModalContent: Box = {
        imgUrl: "",
        boxHeadline: "",
        boxText: "",
    };
    const setContentAndShowModal = (content: Box) => {
        currentModalContent = content;
        showModal = true;
    };
</script>

<section id="foundation">
    <Wrapper>
        <Headline className="headline-wrapper">
            <div slot="headline">
                {@html foundation.headline}
            </div>
            <div slot="sub-headline">
                {@html foundation.subHeadline}
            </div>
        </Headline>

        {#each foundation.boxes as card}
            <IntersectionObserver
                let:intersecting
                bottom={-100}
                className="card-wrapper"
                once
            >
                <div
                    class:intersecting
                    on:click={() => setContentAndShowModal(card)}
                >
                    <Card
                        headline={card.boxHeadline}
                        text={card.boxText}
                        showImg
                        imgType="img"
                        imgSrc={imgBasePath + card.imgUrl}
                        cropText
                    />
                </div>
            </IntersectionObserver>
        {/each}
    </Wrapper>
</section>

{#if showModal}
    <Modal on:close={() => (showModal = false)} transition={scale}>
        <div slot="img">
            <Image
                src={`${imgBasePath}${currentModalContent.imgUrl}`}
                alt={currentModalContent.imgUrl}
                className="modal-img"
            />
        </div>
        <p class="box-headline">{currentModalContent.boxHeadline}</p>
        <div class="box-text modal-text">
            {@html currentModalContent.boxText}
        </div>
    </Modal>
{/if}

<style lang="scss">
    a {
        color: black;
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        list-style: none;
    }
    li {
        opacity: 0;
        transform: translateY(150px) rotate(1.5deg);
        transition: opacity cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
            transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
            rotate cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    }
    li.intersecting {
        opacity: 1;
        transform: translateY(0) rotate(0);
    }
    :global(.modal-img) {
        border-radius: 0.5rem;
        width: 100%;
        // max-height: 300px;
        object-fit: cover;
        object-position: center;
    }

    @media screen and (min-width: 960px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
        }
        li {
            height: 100%;
        }
        :global(.card-wrapper) {
            margin: 0;
            width: calc(50% - 1.5rem);
        }
    }
</style>
