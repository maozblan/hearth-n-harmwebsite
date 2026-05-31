<script>
  let { children } = $props();
</script>

<svelte:head>
  <title>Hearth & Harm Wiki</title>
</svelte:head>

<div id="content">
	{@render children()}
</div>

<style>
  div#content {
		overflow-y: scroll;
  }
</style>
