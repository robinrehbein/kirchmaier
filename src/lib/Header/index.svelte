<script lang="ts">
    import Navbar from "../Navbar/index.svelte";
    import { jsonContent } from "../../stores/stores";
</script>

<header>
	<Navbar
		brand={"Kirchmaier & Staudacher"}
		navbarItems={$jsonContent.navbar.items}
	/>
</header>

<style lang="scss"></style>
