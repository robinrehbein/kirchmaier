<script lang="ts">
    import Headline from "../util/Headline/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import Flex from "../util/Flex/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";

    const contact = $jsonContent.body.contact;
    const imgBasePath = "/web/";

    const iconMapper = {
        phone: "phone.svg",
        fax: "fax.svg",
        mail: "mail.svg",
    };
</script>

<section id="contact">
    <Wrapper>
        <div class="section-wrapper">
            <Headline className="headline-wrapper">
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
            >
                <div class="contact-data">
                    {#each contact.contactData as contactDataElement}
                        <Flex style="margin-bottom: 1rem;">
                            <img
                                src={imgBasePath +
                                    iconMapper[contactDataElement.icon]}
                                class="contact-data-icon"
                                alt={contactDataElement.text}
                            />
                            {contactDataElement.value}
                        </Flex>
                    {/each}

                    <form action={`mailto:${contact.mailAddress}`} method="GET">
                        <button class="button button-mailto" type="submit"
                            >{contact.buttonText}</button
                        >
                    </form>
                </div>

                <div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/place/Kirchmaier+%26+Staudacher+Projektmanagement+GmbH/@47.7798406,9.6073754,16z/data=!4m12!1m6!3m5!1s0x0:0x89cc0a64cdac4eb7!2sKirchmaier+%26+Staudacher+Projektmanagement+GmbH!8m2!3d47.7801002!4d9.6068772!3m4!1s0x0:0x89cc0a64cdac4eb7!8m2!3d47.7801002!4d9.6068772"
                    >
                        <img
                            src="/web/map-mock.png"
                            alt="map"
                            class="contact-map img-shadow"
                        />
                    </a>
                </div>
            </Flex>
        </div>
    </Wrapper>
</section>

<style lang="scss">
    .contact-map {
        width: 100%; //45%;
    }

    @media screen and (min-width: 960px) {
        .contact-data {
            width: 27%; //25%;
            margin-top: auto;
        }

        .contact-map {
            width: 80%; //45%;
            float: right;
        }
    }

    .contact-data-icon {
        margin-right: 1.2rem;
    }

    .button-mailto {
        margin-top: 1.5rem;
        width: 100%;
    }
</style>
