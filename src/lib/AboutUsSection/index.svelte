<script lang="ts">
  import Headline from "../util/Headline/index.svelte";
  import Flex from "../util/Flex/index.svelte";
  import Modal from "../util/Modal/index.svelte";
  import { jsonContent } from "../../stores/stores";
  import { scale } from "svelte/transition";
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
    console.log("remmo");
    currentModalContent = aboutUsElement;
    currentIndex = index;
    showModal = true;
  };
</script>

<div class="content-wrapper">
  <Headline>
    <div slot="headline">
      {@html aboutUsContent.headline}
    </div>
    <div slot="sub-headline">
      {@html aboutUsContent.subHeadline}
    </div>
  </Headline>

  <div class="section-content-wrapper">
    <div>
      {#each aboutUsContent.boxes as aboutUsElement, i}
        <Flex
          flexDirectionColumn
          flexDirectionResponsiveColumnToRow={!(i % 2 === 0)}
          flexDirectionResponsiveColumnToRowReverse={i % 2 === 0}
          justifyContentSpaceBetween
          gap="2rem"
          style="margin-bottom:3rem; cursor:pointer;"
        >
          <img
            src={`${imgBasePath}${aboutUsElement.imgUrl}`}
            alt={aboutUsElement.imgUrl}
            class="img-shadow about-us-image-box"
            on:click={() => setContentAndShowModal(aboutUsElement, i)}
          />
          <div
            class="box-text about-us-text-box"
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

    <div class="about-us-numbers" />
  </div>
</div>

{#if showModal}
  <Modal on:close={() => (showModal = false)} transition={scale}>
    <p class="box-headline">{currentModalContent.boxHeadline}</p>
    <Flex
      flexDirectionColumn
      flexDirectionResponsiveColumnToRow={!(currentIndex % 2 === 0)}
      flexDirectionResponsiveColumnToRowReverse={currentIndex % 2 === 0}
      justifyContentSpaceBetween
      class="flex-gap"
      on:click={() => (showModal = false)}
    >
      <img
        src={`${imgBasePath}${currentModalContent.imgUrl}`}
        alt={currentModalContent.imgUrl}
        class="img-shadow"
      />
      <div class="box-text">
        {@html currentModalContent.boxText}
      </div>
    </Flex>
  </Modal>
{/if}

<style lang="scss">
  .content-wrapper {
    max-width: 1400px;
    margin: auto;
    padding: 1.5rem;
  }

  @media screen and (min-width: 960px) {
    .content-wrapper {
      padding: 2rem 2rem;
    }
    .about-us-text-box {
      width: 40%;
    }
  }
</style>
