<script lang="ts">
  import Headline from "../util/Headline/index.svelte";
  import Flex from "../util/Flex/index.svelte";
  import Modal from "../util/Modal/index.svelte";
  import Wrapper from "../util/Wrapper/index.svelte";
  import Card from "../util/Card/index.svelte";
  import { jsonContent } from "../../stores/stores";

  const referenceContent = $jsonContent.body.references;
  const imgBasePath = "../../../../static/web/";
</script>

<Wrapper>
  <Headline>
    <div slot="headline">
      {@html referenceContent.headline}
    </div>
    <div slot="sub-headline">
      {@html referenceContent.subHeadline}
    </div>
  </Headline>
  <Flex
    flexDirectionColumn
    flexDirectionResponsiveColumnToRow
    alignItemsCenter
    justifyContentSpaceAround
    flexWrapWrap
    gap="3rem"
  >
    {#each referenceContent.projects as project}
      <div class="reference-box">
        <Card
          headline={project.projectName}
          imgType="img"
          imgSrc={`${imgBasePath}${project.mainPictureName}`}
          showImg
        />
      </div>
    {/each}
  </Flex>
</Wrapper>

<style lang="scss">
  .reference-box {
    box-shadow: var(--box-shadow);
    background: white;
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 960px) {
    .reference-box {
      width: calc(50% - 1.5rem);
    }
  }
</style>
