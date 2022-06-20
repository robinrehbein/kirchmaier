<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fade, fly } from "svelte/transition";
  // transition:fly="{{ y: 150, duration: 250 }}"
  // transition:crossfade

  // boolean here right as type?
  const dispatch = createEventDispatcher<{ close: boolean }>();
  const close = () => dispatch("close");

  let modal;
  export let transition = fade;
  export let bgTransition = fade;

  const handle_keydown = (e) => {
      if (e.key === "Escape") {
          close();
          return;
      }

      if (e.key === "Tab") {
          // trap focus
          const nodes: Array<any> = modal.querySelectorAll("*");
          const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

          let index = tabbable.indexOf(document.activeElement);
          if (index === -1 && e.shiftKey) index = 0;

          index += tabbable.length + (e.shiftKey ? -1 : 1);
          index %= tabbable.length;

          tabbable[index].focus();
          e.preventDefault();
      }
  };

  // type of Element but Element doesnt contain focus because focus is an htmlelement function
  const previously_focused: HTMLElement =
      typeof document !== "undefined" &&
      ((<HTMLElement>document.activeElement) as HTMLElement); // cast element to htmlelement

  if (previously_focused) {
      onDestroy(() => {
          previously_focused.focus();
      });
  }
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" transition:bgTransition>
  <div
      class="modal"
      role="dialog"
      aria-modal="true"
      bind:this={modal}
      transition:transition
  >
      <!-- Show Img  -->
      <slot name="img" />

      <!-- wrap content -->
      <div class="content">
          <!-- Show Headline -->
          <slot name="headline" />
          <!-- Show Content  -->
          <slot />
          <!-- svelte-ignore a11y-autofocus -->
      </div>

      <!-- <button class="button" autofocus on:click={close}>Schließen</button> -->
      <button class="button" on:click={close}>Schließen</button>
  </div>
</div>

<style lang="scss">
  .modal-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 100;
  }

  .modal {
      position: absolute;
      left: 50%;
      top: 50%;
      max-height: calc(100vh - 4rem);
      width: calc(100vw - 4rem);
      transform: translate(-50%, -50%);
      border-radius: 0.5rem;
      background: white;
  }

  .content {
      margin: 2rem 2rem 0 2rem;
      overflow-y: scroll;
      max-height: 30vh;
      padding-right: 0.5rem;
  }

  .button {
      margin: 1rem 2rem 2rem 2rem;
      width: calc(100% - 4rem);
  }

  @media screen and (min-width: 960px) {
      .modal {
          max-height: calc(100vh - 4rem);
          width: auto;
          max-width: calc(100vw - 4rem);
      }
  }
</style>