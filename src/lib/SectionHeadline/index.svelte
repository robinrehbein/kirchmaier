<script lang="ts">
</script>

<div>
  <div class="section-headline">
    <slot />
  </div>
</div>

<style lang="sass">
@use "sass:map"

$colors: (primary: ( "100": hsl(100, 80%, 50%), "200": hsl(100, 50%, 90%), "300": hsl(100, 30%, 10%)))

.section-headline 
    font-size: 1.5rem
    position: relative

.section-headline::after 
    content: ""
    position: absolute
    top: 1.75rem
    width: 7rem
    height: 0.2rem
    background: map.get($colors, "primary", "300")

</style>
