<script lang="ts">
  import Headline from "../Headline/index.svelte";
  import { jsonContent } from "../../stores/stores";
  import Flex from "../util/Flex/index.svelte";
  import type { Content } from "src/interfaces/interfaces";
  import phoneIcon from "../../../static/icons/phone.svg";
  import faxIcon from "../../../static/icons/fax.svg";
  import mailIcon from "../../../static/icons/mail.svg";
  import map from "../../../static/map-mock.png";

  const contact = ($jsonContent as Content).body.contact;

  const iconMapper = {
    phone: phoneIcon,
    fax: faxIcon,
    mail: mailIcon
  }

  console.log(iconMapper.phone)
  console.log(phoneIcon)

</script>

<div class="section-wrapper">
  <Headline>
    <div slot="headline">
      {@html contact.headline}
    </div>
    <div slot="sub-headline">
      {@html contact.subHeadline}
    </div>
  </Headline>
  <Flex
    flexDirectionColumn
    flexDirectionResponsiveColumnToRow
    justifyContentSpaceBetween
    gap="3rem"
    class="section-content-wrapper"
  >
    <div>
      {#each contact.contactData as contactDataElement}
        <div class="contact-data-element">
          <img
            src={iconMapper[contactDataElement.icon]}
            class="contact-data-icon"
            alt={contactDataElement.text}
          />
          {contactDataElement.value}
        </div>
      {/each}

      <form action={`mailto:${contact.mailAddress}`} method="GET">
        <button class="button button-mailto" type="submit"
          >{contact.buttonText}</button
        >
      </form>
    </div>
    <img src={map} class="picture" alt="map" />
  </Flex>
</div>

<style lang="scss">
  .contact-data-element {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
  }

  .contact-data-icon {
    margin-right: 1.2rem;
  }

  .button-mailto {
    margin-top: 1.5rem;
    width: 100%;
  }
</style>
