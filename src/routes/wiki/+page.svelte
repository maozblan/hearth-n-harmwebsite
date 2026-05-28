<script>
  import MenuIcon from "$lib/components/MenuIcon.svelte";
  import { characterData } from "$lib/data/characterData";
  import { enemyData } from "$lib/data/enemyData";

  const enemies = Object.entries(enemyData)
    .map(([id, value]) => ({ id, ...value }));

  const characters = Object.entries(characterData)
    .map(([id, value]) => ({ id, ...value }));

</script>

<h1>Welcome to the Hearth & Harm Wiki</h1>
<h2>Click on any icon to get more info.</h2>
<div id="characters" class="row">
  {#each characters as c}
  <MenuIcon
    name={c?.displayName ?? c.name}
    imgId={c.pfpId}
    href="/character/{c.id}"
  />
  {/each}
</div>
<div id="enemies" class="row">
  {#each enemies as enemy}
  <MenuIcon
    name={enemy?.displayName ?? enemy.name}
    imgId={enemy.pfpId}
    href="/enemy/{enemy.id}"
  />
  {/each}
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }
</style>
