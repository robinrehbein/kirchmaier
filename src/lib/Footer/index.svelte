<script lang="ts">
  import Flex from "../util/Flex/index.svelte";
  import Wrapper from "../util/Wrapper/index.svelte";
  import { jsonContent } from "../../stores/stores";

  const legalContent = $jsonContent.legal;
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
        gap="1rem"
      >
        <!-- open in modal -->
        <a class="footer-link" href="">Imprint</a>
        <a class="footer-link" href="">Data Protection</a>
        <a class="footer-link" href="">Disclaimer</a>
      </Flex>
      <span class="line-break" />
      <p>
        Made with <svg
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
          <polygon fill="#8F1329" points="40.053,20 59.578,39.526 79.105,20 " />
        </svg>
        by <a class="footer-link" href="https://programr.de/">programr</a>
      </p>
      <span class="line-break" />
      <p id="rr_copyright">
        Copyright © <em>2021 programr</em> - All rights reserved.
      </p>
    </Flex>
  </Wrapper>
</footer>

<style lang="scss">
  footer {
    background: var(--primary-color);
    padding: 3rem 0rem;
    color: var(--background-color);
    text-align: center;
  }

  .line-break {
    width: 50%;
    height: 2px;
    background-color: var(--background-color);
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 960px) {
    .line-break {
      width: 18%;
    }
  }

  .footer-link {
    color: var(--background-color);
    text-decoration: none !important;
    cursor: pointer;
    font-weight: bold;
  }
</style>
