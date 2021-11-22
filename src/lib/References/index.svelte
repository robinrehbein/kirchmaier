<script lang="ts">
    import Headline from "../util/Headline/index.svelte";
    import Flex from "../util/Flex/index.svelte";
    import Modal from "../util/Modal/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";
    import Card from "../util/Card/index.svelte";
    import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
    import { jsonContent } from "../../stores/stores";

    const referenceContent = $jsonContent.body.references;
    const imgBasePath = "/web/";
</script>

<section id="projects">
    <Wrapper>
        <Headline>
            <div slot="headline">
                {@html referenceContent.headline}
            </div>
            <div slot="sub-headline">
                {@html referenceContent.subHeadline}
            </div>
        </Headline>
        <ul>
            <Flex
                flexDirectionColumn
                flexDirectionResponsiveColumnToRow
                alignItemsFlexStart
                justifyContentSpaceAround
                flexWrapWrap
                gap="3rem"
            >
                {#each referenceContent.projects as project}
                    <IntersectionObserver
                        let:intersecting
                        bottom={-100}
                        once
                        className="reference-box"
                    >
                        <li class:intersecting>
                            <Card
                                headline={project.projectName}
                                text={project.text}
                                imgType="img"
                                imgSrc={`${imgBasePath}${project.mainPictureName}`}
                                showImg
                            />
                        </li>
                    </IntersectionObserver>
                {/each}
            </Flex>
        </ul>
    </Wrapper>
</section>

<style lang="scss">
    ul {
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
        :global(.reference-box) {
            width: calc(50% - 1.5rem);
        }
        li {
            height: 100%;
        }
    }
</style>
