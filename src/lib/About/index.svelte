<script lang="ts">
    import Card from "../util/Card/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import Image from "../util/Image/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Headline from "../util/Headline/index.svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
    import { fade, scale } from "svelte/transition";
    import { jsonContent } from "../../stores/stores";

    const about = $jsonContent.body.about;

    import type { Box } from "../../interfaces/interfaces";

    const imgBasePath = "../../../static/";
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

<Wrapper>
    <section id="about">
        <Headline>
            <div slot="headline">
                {@html about.headline}
            </div>
            <div slot="sub-headline">
                {@html about.subHeadline}
            </div>
        </Headline>

        <ul>
            {#each about.boxes as card, i}
                <IntersectionObserver
                    let:intersecting
                    bottom={-100}
                    className="card-wrapper"
                    once
                >
                    <li
                        class:intersecting
                        on:click={() => setContentAndShowModal(card)}
                    >
                        <Card
                            headline={card.boxHeadline}
                            text={card.boxText}
                            showImg
                            imgType="img"
                            imgSrc={card.imgUrl}
                            cropText
                        />
                    </li>
                </IntersectionObserver>
            {/each}
        </ul>
    </section>
</Wrapper>

{#if showModal}
    <Modal on:close={() => (showModal = false)} transition={scale}>
        <Image
            src={`${imgBasePath}${currentModalContent.imgUrl}`}
            alt={currentModalContent.imgUrl}
            slot="img"
        />
        <p class="box-headline">{currentModalContent.boxHeadline}</p>
        <div class="box-text modal-text">
            {@html currentModalContent.boxText}
        </div>
    </Modal>
{/if}

<!-- <Wrapper>
    <Headline>
        <div slot="headline">
            {@html aboutUsContent.headline}
        </div>
        <div slot="sub-headline">
            {@html aboutUsContent.subHeadline}
        </div>
    </Headline>

    <div>
        {#each aboutUsContent.boxes as aboutUsElement, i}
            <Flex
                flexDirectionColumn
                flexDirectionResponsiveColumnToRow={i % 2 === 0}
                flexDirectionResponsiveColumnToRowReverse={!(i % 2 === 0)}
                justifyContentSpaceBetween
                gap="2rem"
                style="margin-bottom:4rem; cursor:pointer;"
            >
            <img
                src={`${imgBasePath}${aboutUsElement.imgUrl}`}
                alt={aboutUsElement.imgUrl}
                class="img-shadow about-us-box"
                on:click={() => setContentAndShowModal(aboutUsElement, i)}
            />
                <div
                    class="box-text about-us-box"
                    on:click={() => setContentAndShowModal(aboutUsElement, i)}
                >
                    <p class="box-headline">{aboutUsElement.boxHeadline}</p>
                    <div class="crop-after-three-lines">
                        {@html aboutUsElement.boxText}
                    </div>
                </div>
            </Flex>
        {/each}
    </div>
</Wrapper>
<div class="about-us-numbers">
    <Wrapper>
        <Flex
            flexDirectionColumn
            flexDirectionResponsiveColumnToRow
            justifyContentSpaceBetween
            alignItemsCenter
            gap="3rem"
        >
            {#each aboutUsContent.numbers as numberEntry}
                <div class="about-us-number-card">
                    <div class="about-us-number-card-hl">
                        {numberEntry.boxNumber}
                    </div>
                    <div>{numberEntry.boxMetric}</div>
                </div>
                <span class="line-break" />
            {/each}
        </Flex>
    </Wrapper>
</div>

{#if showModal}
    <Modal on:close={() => (showModal = false)} transition={fade}>
        <p class="box-headline">{currentModalContent.boxHeadline}</p>
        <Flex
            flexDirectionColumn
            flexDirectionResponsiveColumnToRowReverse
            justifyContentSpaceBetween
            class="flex-gap"
            on:click={() => (showModal = false)}
        >
            <img
                src={`${imgBasePath}${currentModalContent.imgUrl}`}
                alt={currentModalContent.imgUrl}
                class="img-shadow"
            />
            <div class="box-text modal-text">
                {@html currentModalContent.boxText}
            </div>
        </Flex>
    </Modal>
{/if} -->
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

    @media screen and (min-width: 960px) {
        ul {
            flex-direction: row;
            flex-wrap: wrap;
        }
        li {
            height: 100%;
        }
        :global(.card-wrapper) {
            margin: 0 auto;
            width: calc(50% - 1.5rem);
        }
        :global(.card) {
            height: 100%;
        }
    }

    // .about-us-numbers {
    //     background: var(--primary-color);
    //     padding: 4rem 0rem;
    //     color: var(--background-color);
    // }

    // .about-us-number-card {
    //     width: 85%;
    //     padding: 1.5rem;
    //     border-radius: 1rem;
    //     text-align: center;
    //     font-size: 1.7rem;
    //     line-height: 1.5;
    //     transition: all ease-in-out 0.25s;
    //     position: relative;
    // }

    // .about-us-number-card:hover {
    //     background: var(--secondary-color);
    //     box-shadow: var(--box-shadow-dark);
    //     transform: scale(1.03);
    // }

    // .line-break {
    //     width: 15%;
    //     height: 2px;
    //     background-color: var(--background-color);
    //     border-radius: 0.5rem;
    // }

    // .line-break:last-child {
    //     display: none;
    // }

    // .about-us-number-card-hl {
    //     font-weight: bold;
    // }

    // .flex-gap {
    //     gap: 2rem;
    //     margin-bottom: 3rem;
    //     cursor: pointer;
    // }

    // @media screen and (min-width: 960px) {
    //     .about-us-number-card {
    //         width: 23%;
    //     }

    //     .line-break {
    //         display: none;
    //     }

    //     .about-us-box {
    //         width: 40%;
    //         margin: auto 0;
    //     }
    //     .flex-gap {
    //         gap: 4rem;
    //     }
    // }
</style>
