<script lang="ts"></script>

<div class="headline">
    <slot name="headline" />
</div>
<div class="sub-headline">
    <slot name="sub-headline" />
</div>

<style lang="scss">
    .headline {
        font-size: 1.6rem;
        position: relative;
        margin: 0.7rem 0rem;
    }

    .headline::after {
        content: "";
        position: absolute;
        top: 1.75rem;
        width: 8rem;
        height: 0.2rem;
        background: var(--primary-color);
    }

    .sub-headline {
        font-size: 1.05rem;
    }
</style>
