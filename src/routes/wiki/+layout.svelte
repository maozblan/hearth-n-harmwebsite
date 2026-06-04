<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/state';

  let { children } = $props();
</script>

<svelte:head>
  <title>Hearth & Harm Wiki</title>
</svelte:head>

<div id="content">
	{@render children()}
  <a href={resolve('/wiki')} class:hide={page.url.pathname.endsWith("wiki")}>{`<< back`}</a>
</div>

<style>
  div#content {
		overflow-y: scroll;
  }

  a {
    text-decoration: none;
    font-family: 'Silkscreen', monospace;
  }
</style>
