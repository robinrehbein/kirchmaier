<script lang="ts"></script>

<div class="headline-wrapper">
    <div class="headline">
        <slot name="headline" />
    </div>
    <div class="sub-headline">
        <slot name="sub-headline" />
    </div>
</div>

<style lang="scss">
    .headline-wrapper {
        padding: 10rem 0 4rem 0;
    }
    .headline {
        font-size: 1.6rem;
        position: relative;
        margin: 0.7rem 0rem;
        width: fit-content;
    }
    .headline::after {
        content: "";
        position: absolute;
        top: 2.5rem;
        width: 50%;
        height: 0.25rem;
        background: var(--primary-color);
        border-radius: 0.5rem;
    }

    .sub-headline {
        margin-top: 1.6rem;
        font-size: 1.05rem;
    }

    @media screen and (min-width: 960px) {
        .headline-wrapper {
            // padding: 11rem 0 4rem 0;
        }
        .headline {
            font-size: 3rem;
        }
        .headline::after {
            top: 4rem;
        }
    }
</style>
