<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="all">
  <nav>
		<h2>HEARTH & HARM WIKI</h2>
	</nav>
  <div>
    {@render children()}
  </div>
</div>

<style>
  div#all {
    height: 99vh;
    display: flex;
    flex-direction: column;

    & > nav {
      height: 5em;
      background-color: #000;
      border-bottom: 5px solid var(--white);
			
			padding: 0 2rem;
			display: flex;
			flex-direction: row;
			align-items: center;

			* {
				margin: 0
			}
    }
    & > div {
      flex-grow: 1;
    }
  }
</style>
