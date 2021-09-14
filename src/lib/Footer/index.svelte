<script lang="ts">
    import Flex from "../util/Flex/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import type { LegalSection } from "../../interfaces/interfaces";
    import { fade } from "svelte/transition";

    const legalSections = $jsonContent.legal;
    let showModal = false;
    let currentModalContent: LegalSection = {
        title: "",
        content: [],
    };
    const setContentAndShowModal = (legalElement: LegalSection) => {
        currentModalContent = legalElement;
        showModal = true;
    };
</script>

<footer>
    <Wrapper>
        <Flex
            flexDirectionColumn
            justifyContentSpaceBetween
            alignItemsCenter
            gap="2rem"
        >
            <Flex
                flexDirectionColumn
                flexDirectionResponsiveColumnToRow
                justifyContentSpaceBetween
                alignItemsCenter
                gap="2rem"
            >
                {#each legalSections as legalElement}
                    <!-- open in modal -->
                    <div
                        class="footer-link"
                        on:click={() => setContentAndShowModal(legalElement)}
                    >
                        {legalElement.title}
                    </div>
                {/each}
            </Flex>
            <span class="line-break" />
            <p>
                Made with
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="40px"
                    height="30px"
                    viewBox="0 0 80 60"
                    enable-background="new 0 0 80 60"
                    xml:space="preserve"
                >
                    <polygon
                        fill="#CD1B38"
                        points="20.526,0.45 1,19.977 40.053,59.028 79.105,19.977 59.578,0.45 40.053,19.977 "
                    />
                    <polygon
                        fill="#8F1329"
                        points="40.053,20 59.578,39.526 79.105,20 "
                    />
                </svg>
                by
                <a class="footer-link" href="https://programr.de/">programr</a>
            </p>
            <span class="line-break" />
            <p id="rr_copyright">
                Copyright © <em>2021 programr</em> - All rights reserved.
            </p>
        </Flex>
    </Wrapper>
</footer>
{#if showModal}
    <Modal on:close={() => (showModal = false)} transition={fade}>
        <h2>{currentModalContent.title}</h2>
        {#each currentModalContent.content as contentElement}
            <div class="legal-content-wrapper">
                <p class="box-headline">{contentElement.heading}</p>
                <div class="box-text">
                    {@html contentElement.text}
                </div>
            </div>
        {/each}
    </Modal>
{/if}

<style lang="scss">
    footer {
        background: var(--primary-color);
        padding: 3rem 0rem;
        color: var(--background-color);
        text-align: center;
    }

    .line-break {
        width: 15%;
        height: 2px;
        background-color: var(--background-color);
        border-radius: 0.5rem;
    }

    svg {
        width: 17px;
        height: auto;
        margin: 0 0.3rem;
    }

    @media screen and (min-width: 960px) {
        .line-break {
            width: 11%;
        }
    }
    .footer-link {
        color: var(--background-color);
        cursor: pointer;
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }

    h2, 
    .legal-content-wrapper {
        margin-bottom: 2rem;
    }
</style>
