<script>
  import MenuIcon from "$lib/components/MenuIcon.svelte";
  import { characterData } from "$lib/data/characterData";
  import { enemyData } from "$lib/data/enemyData";

  const enemies = Object.entries(enemyData).map(([id, value]) => ({
    id,
    ...value,
  }));

  const characters = Object.entries(characterData).map(([id, value]) => ({
    id,
    ...value,
  }));
</script>

<h1>Welcome to the Hearth & Harm Wiki</h1>
<p>
  Hearth & Harm is a turn-based tactical roguelike about fighting off the
  unending rampage of the frost. Play as a character inexplicably bound to the
  whims of a pyromancer who summons you over and over to fight for their
  amusement.
</p>
<div id="characters" class="row">
  {#each characters as c}
    <MenuIcon
      name={c?.displayName ?? c.name}
      imgId={c.pfpId}
      href="/wiki/character/{c.id}"
    />
  {/each}
</div>
<div id="enemies" class="row">
  {#each enemies as enemy}
    <MenuIcon
      name={enemy?.displayName ?? enemy.name}
      imgId={enemy.pfpId}
      href="/wiki/enemy/{enemy.id}"
    />
  {/each}
</div>

<style>
  h1,
  h2 {
    text-align: center;
  }
</style>
