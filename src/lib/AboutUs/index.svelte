<script lang="ts">
    import Headline from "../util/Headline/index.svelte";
    import Flex from "../util/Flex/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import { fade } from "svelte/transition";
    import type { Box } from "../../interfaces/interfaces";

    const imgBasePath = "../../../static/";
    const aboutUsContent = $jsonContent.body.about;
    let showModal = false;
    let currentModalContent: Box = {
        imgUrl: "",
        boxHeadline: "",
        boxText: "",
    };
    let currentIndex: number = 0;
    const setContentAndShowModal = (aboutUsElement: Box, index: number) => {
        currentModalContent = aboutUsElement;
        currentIndex = index;
        showModal = true;
    };
</script>

<Wrapper>
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
                <div
                    class="box-text about-us-box"
                    on:click={() => setContentAndShowModal(aboutUsElement, i)}
                >
                    <p class="box-headline">{aboutUsElement.boxHeadline}</p>
                    <div class="crop-after-three-lines">
                        {@html aboutUsElement.boxText}
                    </div>
                </div>
                <img
                    src={`${imgBasePath}${aboutUsElement.imgUrl}`}
                    alt={aboutUsElement.imgUrl}
                    class="img-shadow about-us-box"
                    on:click={() => setContentAndShowModal(aboutUsElement, i)}
                />
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
            alignItemsCenter
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
{/if}

<style lang="scss">
    .about-us-numbers {
        background: var(--primary-color);
        padding: 4rem 0rem;
        color: var(--background-color);
    }

    .about-us-number-card {
        width: 85%;
        padding: 1.5rem;
        border-radius: 1rem;
        text-align: center;
        font-size: 1.7rem;
        line-height: 1.5;
        transition: all ease-in-out 0.25s;
        position: relative;
    }

    .about-us-number-card:hover {
        background: var(--secondary-color);
        box-shadow: var(--box-shadow-dark);
        transform: scale(1.03);
    }

    .line-break {
        width: 40%;
        height: 3px;
        background-color: var(--background-color);
        border-radius: 0.5rem;
    }
    .line-break:last-child {
        display: none;
    }

    .about-us-number-card-hl {
        font-weight: bold;
    }

    @media screen and (min-width: 960px) {
        .about-us-number-card {
            width: 23%;
        }

        .line-break {
            display: none;
        }

        .about-us-box {
            width: 40%;
            margin: auto 0;
        }
    }
</style>
