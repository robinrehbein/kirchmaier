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

    let active = false;

    const iconMapper = {
        phone: "phone.svg",
        fax: "fax.svg",
        mail: "mail.svg",
    };
</script>

<section id="about">
    <Wrapper>
        <Headline className="headline-wrapper">
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

    <div class="more-team-container" class:active>
        <div class="more-team-headline" class:active>
            <span class="dash-line" />
            <p on:click={() => (active = !active)}>&plus; Mehr über das Team</p>
            <span class="dash-line" />
        </div>
        <div class="more-team-content" class:active in:scale>
            <ul>
                <IntersectionObserver let:intersecting bottom={-100} once>
                    <li class="team-member" class:intersecting>
                        <img
                            class="team-member-img"
                            src={imgBasePath + "ralph.jpg"}
                            alt=""
                        />
                        <div>
                            <Headline>
                                <p slot="headline">Ralph Kirchmaier</p>
                                <p slot="sub-headline">
                                    <b>Geschäftsführer</b>
                                </p>
                            </Headline>
                            <br />
                            <p>
                                E-Mail: <a
                                    href="mailto:ralph.kirchmaier@kirchmaier-staudacher.de"
                                    >ralph.kirchmaier@kirchmaier-staudacher.de</a
                                >
                            </p>
                            <p>Tel.: 0751 / 36221 - 10</p>
                        </div>
                    </li>
                </IntersectionObserver>
                <IntersectionObserver let:intersecting bottom={-100} once>
                    <li class="team-member" class:intersecting>
                        <img
                            class="team-member-img"
                            src={imgBasePath + "robin.jpg"}
                            alt=""
                        />
                        <div>
                            <Headline>
                                <p slot="headline">Robin Kirchmaier</p>
                                <p slot="sub-headline">
                                    <b>Geschäftsführer</b>
                                </p>
                            </Headline>
                            <br />
                            <p>
                                E-Mail: <a
                                    href="mailto:robin.kirchmaier@kirchmaier-staudacher.de"
                                    >robin.kirchmaier@kirchmaier-staudacher.de</a
                                >
                            </p>
                            <p>Tel.: 0751 / 36221 - 12</p>
                        </div>
                    </li>
                </IntersectionObserver>
                <IntersectionObserver let:intersecting bottom={-100} once>
                    <li class="team-member" class:intersecting>
                        <img
                            class="team-member-img"
                            src={imgBasePath + "volker.jpg"}
                            alt=""
                        />
                        <div>
                            <Headline>
                                <p slot="headline">Volker Boos</p>
                                <p slot="sub-headline">
                                    <b>Vermietung und Verkauf</b>
                                </p>
                            </Headline>
                            <br />
                            <p>
                                E-Mail: <a
                                    href="mailto:volker.boos@kirchmaier-staudacher.de"
                                    >volker.boos@kirchmaier-staudacher.de</a
                                >
                            </p>
                            <p>Tel.: 0751 / 36221 - 50</p>
                        </div>
                    </li>
                </IntersectionObserver>
                <IntersectionObserver let:intersecting bottom={-100} once>
                    <li class="team-member" class:intersecting>
                        <img
                            class="team-member-img"
                            src={imgBasePath + "jasmin.jpg"}
                            alt=""
                        />
                        <div>
                            <Headline>
                                <p slot="headline">Jasmin Kirchmaier</p>
                                <p slot="sub-headline">
                                    <b>Projektmanagement</b>
                                </p>
                            </Headline>
                            <br />
                            <p>
                                E-Mail: <a
                                    href="mailto:jasmin.kirchmaier@kirchmaier-staudacher.de"
                                    >jasmin.kirchmaier@kirchmaier-staudacher.de</a
                                >
                            </p>
                            <p>Tel.: 0751 / 36221 - 19</p>
                        </div>
                    </li>
                </IntersectionObserver>
                <IntersectionObserver let:intersecting bottom={-100} once>
                    <li class="team-member" class:intersecting>
                        <img
                            class="team-member-img"
                            src={imgBasePath + "martina.jpg"}
                            alt=""
                        />
                        <div>
                            <Headline>
                                <p slot="headline">Martina Gotterbarm</p>
                                <p slot="sub-headline">
                                    <b>Mietverwaltung</b>
                                </p>
                            </Headline>
                            <br />
                            <p>
                                E-Mail: <a
                                    href="mailto:martina.gotterbarm@kirchmaier-staudacher.de"
                                    >martina.gotterbarm@kirchmaier-staudacher.de</a
                                >
                            </p>
                            <p>Tel.: 0751 / 36221 - 18</p>
                        </div>
                    </li>
                </IntersectionObserver>
            </ul>
        </div>
    </div>

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
        max-height: 300px;
        object-fit: cover;
        object-position: center;
    }
    .more-team-container {
        margin-top: 2rem;
        background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            var(--primary-color)
        );
    }
    .more-team-container.active {
        background-image: none;
    }
    .more-team-headline {
        margin: auto;
        max-width: 1280px;
        padding: 1rem 0 2rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        p {
            cursor: pointer;
            color: rgba(0, 0, 0, 0.3);
        }
    }
    .more-team-headline.active {
        p {
            color: rgba(0, 0, 0, 1);
        }
    }
    .dash-line {
        margin: 2rem;
        flex-grow: 1;
        height: 0.25rem;
        background-color: var(--primary-color);
        border-radius: 0.1rem;
    }
    .more-team-content {
        margin: 0 2rem;
        max-width: 1280px;
        // padding: 0 2rem;
        text-align: justify;
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: height ease-in-out 0.5s, opacity ease-in-out 0.5s;
    }
    .more-team-content.active {
        opacity: 1;
        height: 2690px;
        margin: 0 2rem;
        margin-bottom: 2rem;
    }
    .team-member {
        display: flex;
        flex-direction: column;
        width: 100%;
        .team-member-img {
            height: 100%;
            max-height: 500px;
            object-fit: cover;
            object-position: top;
            border-radius: 0.5rem;
            box-shadow: var(--box-shadow);
        }
    }
    .numbers {
        font-size: 1.7rem;
        line-height: 3rem;
        // margin-top: 4rem;
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
        .more-team-content {
            margin: auto;
        }
        .more-team-content.active {
            margin: auto;
            margin-bottom: 3rem;
        }

        .team-member {
            display: flex;
            flex-direction: row;
            width: 900px;
            div {
                margin: auto auto 0 2rem;
            }
            .team-member-img {
                border-radius: 0.5rem;
                box-shadow: var(--box-shadow);
            }
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
