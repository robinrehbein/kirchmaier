<script lang="ts">
  import Headline from "../util/Headline/index.svelte";
  import Flex from "../util/Flex/index.svelte";
  import Modal from "../util/Modal/index.svelte";
  import Wrapper from "../util/Wrapper/index.svelte";
  import Gallery from "../Gallery/index.svelte";
  import Card from "../util/Card/index.svelte";
  import IntersectionObserver from "$lib/util/IntersectionObserver/index.svelte";
  import { jsonContent } from "../../stores/stores";
  import type { Project } from "../../interfaces/interfaces";
  import { fade, crossfade, fly, scale } from "svelte/transition";

  const referenceContent = $jsonContent.body.references;
  const imgBasePath = "/web/";

  let showModal = false;
  let currentModalContent: Project = {
    projectName: "",
    text: "",
    mainPictureName: "",
    galleryPictureNames: [""],
  };
  const setContentAndShowModal = (content: Project) => {
    currentModalContent = content;
    showModal = true;
  };
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
            <li
              class:intersecting
              on:click={() => setContentAndShowModal(project)}
            >
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

{#if showModal}
  <Modal on:close={() => (showModal = false)} transition={scale}>
    <p class="box-headline">{currentModalContent.projectName}</p>
    <Gallery imageSrcs={currentModalContent.galleryPictureNames} />
    <div class="box-text modal-text">
      {@html currentModalContent.text}
    </div>
  </Modal>
{/if}

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
