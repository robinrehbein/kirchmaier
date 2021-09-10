<script lang="ts">
  import Headline from "../Headline/index.svelte";
  import Flex from "../util/Flex/index.svelte";
  import type { Content } from "../../interfaces/interfaces";
  import { jsonContent } from "../../stores/stores";

  const imgBasePath = "../../../static/";
  const aboutUsContent = $jsonContent.body.about;
</script>

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
    {#each aboutUsContent.boxes as aboutUsElement}
      <Flex
        flexDirectionColumn
        flexDirectionResponsiveColumnToRow
        justifyContentSpaceBetween
        gap="2rem"
        style="margin-bottom:3rem;"
      >
        <div>
          <p class="box-headline">{aboutUsElement.boxHeadline}</p>
          <div class="box-text">
            {@html aboutUsElement.boxText}
          </div>
        </div>
        <img
          src={`${imgBasePath}${aboutUsElement.imgUrl}`}
          alt={aboutUsElement.imgUrl}
          class="img-shadow"
        />
      </Flex>
    {/each}
  </div>

  <div class="about-us-numbers" />
</div>

<style lang="scss">
</style>
