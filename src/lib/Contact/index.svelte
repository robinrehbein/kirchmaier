<script lang="ts">
    import Headline from "../util/Headline/index.svelte";
    import { jsonContent } from "../../stores/stores";
    import Flex from "../util/Flex/index.svelte";
    import Wrapper from "../util/Wrapper/index.svelte";

    const contact = $jsonContent.body.contact;

    const iconMapper = {
        phone: "/phone.svg",
        fax: "/fax.svg",
        mail: "/mail.svg",
    };
</script>

<section id="contact">
    <Wrapper>
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
            >
                <div class="contact-data">
                    {#each contact.contactData as contactDataElement}
                        <Flex style="margin-bottom: 1rem;">
                            <img
                                src={iconMapper[contactDataElement.icon]}
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

                <img
                    src="/map-mock.png"
                    class="contact-map img-shadow"
                    alt="map"
                />
            </Flex>
        </div>
    </Wrapper>
</section>

<style lang="scss">
    @media screen and (min-width: 960px) {
        .contact-data {
            width: 27%; //25%;
            margin-top: auto;
        }

        .contact-map {
            width: 48%; //45%;
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
