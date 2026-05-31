<script lang="ts">
  import favicon from "$lib/assets/HH_Shortcut.png";
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="all" class="col">
  <nav class="row">
    <a
      class="row"
      href={resolve("/wiki")}
      class:active={page.url.pathname.includes("wiki")}
    >
      <h2>HEARTH & HARM WIKI</h2>
      <span> {`<<`} </span>
    </a>
    <a
      class="row"
      href={resolve("/pressKit")}
      class:active={page.url.pathname.includes("pressKit")}
    >
      <span> {`>>`} </span>
      <h2>PRESS KIT</h2>
    </a>
  </nav>
  <div>
    {@render children()}
  </div>
</div>

<style>
  div#all {
    height: 99vh;
    & > nav {
      background-color: #000;
      border-bottom: 5px solid var(--white);

      align-items: center;
      justify-content: space-between;

      * {
        margin: 0;
      }

      a {
        font-family: "Silkscreen", monospace;
        text-decoration: none;
        align-items: center;
        padding: 1rem 2rem;
        * {
          color: rgba(50, 120, 233, 0.5);
        }
      }

      a.active * {
        color: var(--white);
      }
    }
    & > div {
      flex-grow: 1;
    }
  }
</style>
