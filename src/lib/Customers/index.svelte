<script lang="ts">
  import Headline from "../util/Headline/index.svelte";
  import Flex from "../util/Flex/index.svelte";
  import Modal from "../util/Modal/index.svelte";
  import Wrapper from "../util/Wrapper/index.svelte";
  import Image from "../util/Image/index.svelte";
  import { jsonContent } from "../../stores/stores";

  const customersContent = $jsonContent.body.customers;
  const imgBasePath = '/web/';
  const imageFileNames = customersContent.customerList.split(",");
</script>

<section id="customer">
  <Wrapper>
    <Headline className="headline-wrapper">
      <div slot="headline">
        {@html customersContent.headline}
      </div>
      <div slot="sub-headline">
        {@html customersContent.subHeadline}
      </div>
    </Headline>
    <ul>
      <Flex
        flexDirectionResponsiveColumnToRow
        alignItemsCenter
        flexWrapWrap
        class="section-content-wrapper customer-list"
      >
        {#each imageFileNames as imageFileName}
          <li class="customer-list-element">
            <img
              src={imgBasePath + imageFileName}
              class="customer-list-image"
              alt={imageFileName}
              title={imageFileName.split(".")[0]}
            />
          </li>
        {/each}
      </Flex>
    </ul>
  </Wrapper>
</section>

<style lang="scss">
  ul {
    list-style: none;
  }

  :global(.customer-list) {
    gap: 3rem;
  }

  .customer-list-element {
    width: 100%;
  }

  .customer-list-image {
    height: 5rem;
    display: block;
    margin: auto;
  }

  @media screen and (min-width: 960px) {
    :global(.customer-list) {
      gap: 4rem;
    }

    .customer-list-element {
      width: auto;
    }

    .customer-list-image {
      height: 5rem;
    }
  }
</style>
