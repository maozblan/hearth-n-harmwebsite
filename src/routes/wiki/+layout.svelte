<script>
  let { children } = $props();
</script>

<div id="content">
	{@render children()}
</div>

<style>
  div#content {
		overflow-y: scroll;
  }
</style>
