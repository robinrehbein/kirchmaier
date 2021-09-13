<script lang="ts">
    import Headline from "../util/Headline/index.svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Card from "../util/Card/index.svelte";
    import { jsonContent } from "../../stores/stores";

    const services = $jsonContent.body.ourServices;
</script>

<Wrapper>
    <section id="services">
        <Headline>
            <div slot="headline">
                {@html services.headline}
            </div>
            <div slot="sub-headline">
                {@html services.subHeadline}
            </div>
        </Headline>

        <ul>
            {#each services.boxes as card}
                <IntersectionObserver let:intersecting bottom={-100} className="card-wrapper">
                    <li class:intersecting>
                        <Card headline={card.boxHeadline} text={card.boxText} showImg imgType="img" imgSrc={card.imgUrl} />
                    </li>
                </IntersectionObserver>
            {/each}
        </ul>
    </section>
</Wrapper>

<style lang="scss">
    ul {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        list-style: none;
    }
    li {
        opacity: 0;
        transform: translateY(150px) rotate(2deg);
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
            width: calc(50% - 1.5rem);
        }
    }
</style>
