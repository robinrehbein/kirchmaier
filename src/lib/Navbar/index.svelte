<script lang="ts">
  import { page } from "$app/stores";
  import type { NavbarItem } from "../../interfaces/interfaces";

  // Navbareintraege aus Datei laden mit Namen und Links
  export let brand: string;
  export let navbarItems: Array<NavbarItem>;
  export let scrollMargin = 100;
  let y;
  let active = false;
</script>

<svelte:window bind:scrollY={y} />

<nav class:scrolled={y > scrollMargin} class:active>
  <!-- // div with logo Kirchmaier or // -->
  <div class="brand-wrapper">
    <div class="brand">
      <a href="#top">
        <svg
          class="logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="isolation:isolate"
          viewBox="0 0 102 50"
          width="102pt"
          height="50pt"
          ><defs
            ><clipPath id="_clipPath_CDm95qyi8ceqeNkoTXVDhNjNN32NG4f9"
              ><rect width="102" height="50" /></clipPath
            ></defs
          ><g clip-path="url(#_clipPath_CDm95qyi8ceqeNkoTXVDhNjNN32NG4f9)"
            ><rect
              width="102"
              height="50"
              style="fill:rgb(0,0,0)"
              fill-opacity="0"
            /><clipPath id="_clipPath_F4W9GkP635I59phimjSWCTxIIPHWhVjj"
              ><rect
                x="0"
                y="0"
                width="102"
                height="50"
                transform="matrix(1,0,0,1,0,0)"
                fill="rgb(255,255,255)"
              /></clipPath
            ><g clip-path="url(#_clipPath_F4W9GkP635I59phimjSWCTxIIPHWhVjj)"
              ><g
                ><rect
                  x="0"
                  y="0"
                  width="4.667"
                  height="50"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(157,161,163)"
                /><rect
                  x="48.667"
                  y="0"
                  width="4.667"
                  height="50"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(156,160,162)"
                /><rect
                  x="97.333"
                  y="0"
                  width="4.667"
                  height="50"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(159,162,164)"
                /><path
                  d=" M 45.333 49.949 L 8 50 L 26.609 25 L 45.333 49.949 Z "
                  fill="rgb(220,131,178)"
                /><path
                  d=" M 94 24.949 L 56.667 25 L 75.276 0 L 94 24.949 Z "
                  fill="rgb(220,131,178)"
                /></g
              ></g
            ></g
          ></svg
        >
      </a>
      <p class="name" class:active>
        {brand}
      </p>
    </div>
    <!-- responsive menu -->
    <svg
      class="arrow"
      class:active
      class:scrolled={y > scrollMargin}
      on:click={() => (active = !active)}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
      ><path d="M0 0h24v24H0V0z" fill="none" /><path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      /></svg
    >
  </div>
  <ul class:active>
    {#each navbarItems as navbarItem}
      <li
        class="navbar-item"
        class:active={$page.path === "#" + navbarItem.url}
      >
        <a
          class:scrolled={y > scrollMargin}
          class:active
          sveltekit:prefetch
          href={"/#" + navbarItem.url}
          on:click={() => (active = false)}
        >
          {navbarItem.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    height: 5rem;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 2rem;
    right: 2rem;
    left: 2rem;
    padding: 1.5rem 2rem;
    text-transform: uppercase;
    overflow: hidden;
    color: white;

    border-radius: 0.5rem;
    z-index: 1;

    transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),
      background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  nav.scrolled,
  nav.active {
    box-shadow: var(--box-shadow);
    background-color: white;
    color: var(--text-color);
  }
  nav.active {
    height: calc(100% - 4rem);
  }
  ul {
    opacity: 0;
    list-style: none;

    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  ul.active {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .navbar-item {
    width: max-content;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a.scrolled {
    color: var(--text-color);
  }
  a.active {
    color: var(--text-color);
  }
  .arrow {
    cursor: pointer;
    filter: invert(1);
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .arrow.scrolled {
    filter: invert(0);
  }
  .arrow.active {
    filter: invert(0);
    transform: rotate(180deg);
  }
  .brand-wrapper {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .logo {
    height: 2rem;
    margin-right: 2rem;
    width: auto;
  }
  .name {
    display: none;
  }

  @media screen and (min-width: 960px) {
    nav {
      height: 6rem;
      flex-direction: row;
    }
    ul {
      opacity: 1;
      flex-direction: row;
    }
    li {
      margin-left: 2rem;
    }
    .logo {
      height: 3rem;
    }
    .name {
      font-size: 1rem;
      display: initial;
    }
    .arrow {
      display: none;
    }
  }
</style>
