<script lang="ts">
    import Card from "../util/Card/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import Image from "../util/Image/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Headline from "../util/Headline/index.svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import type { Box } from "../../interfaces/interfaces";
    import { fade, crossfade, fly, scale } from "svelte/transition";

    const about = $jsonContent.body.about;
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

<section id="about">
    <Wrapper>
        <Headline>
            <div slot="headline">
                {@html about.headline}
            </div>
            <div slot="sub-headline">
                {@html about.subHeadline}
            </div>
        </Headline>

        <ul>
            {#each about.boxes as card}
                <IntersectionObserver
                    let:intersecting
                    bottom={-100}
                    className="card-wrapper"
                    once
                >
                    <li
                        class:intersecting
                        class="about-box"
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
                    </li>
                </IntersectionObserver>
            {/each}
        </ul>
    </Wrapper>
    <ul class="numbers">
        {#each about.numbers as number}
            <IntersectionObserver let:intersecting bottom={-100} once>
                <li class="number" class:intersecting>
                    <h2>{number.boxNumber}</h2>
                    <p>{number.boxMetric}</p>
                </li>
            </IntersectionObserver>
            <span class="line-break" />
        {/each}
    </ul>
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
    ul {
        display: flex;
        flex-direction: column;
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
        max-height: 300px;
        object-fit: cover;
        object-position: center;
    }

    .numbers {
        font-size: 1.7rem;
        line-height: 3rem;
        margin-top: 4rem;
        padding: 3rem;
        background-color: var(--primary-color);
        align-items: center;
        text-align: center;
        justify-content: space-around;
    }

    li.number {
        color: white;
        border-radius: 0.5rem;
        padding: 2rem;
        transition: box-shadow cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s,
            transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    }

    li.number:hover {
        box-shadow: var(--box-shadow-dark);
        transform: scale(1.1);
    }

    span.line-break {
        opacity: 1;
        transform: translateY(0) rotate(0);
        width: 15%;
        height: 2px;
        background-color: white;
        border-radius: 0.5rem;
    }

    span.line-break:last-child {
        display: none;
    }

    @media screen and (min-width: 960px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
        }
        li {
            height: 100%;
        }
        span.line-break {
            display: none;
        }
        .numbers {
            padding: 4rem;
        }
        :global(.card-wrapper) {
            margin: 0 auto;
            width: calc(50% - 1.5rem);
        }
    }
</style>
