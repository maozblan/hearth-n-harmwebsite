<script>
  import PressKitImg from "$lib/components/PressKitImg.svelte";
</script>

<svelte:head>
  <title>Hearth & Harm Press Kit</title>
</svelte:head>

<h1>Hearth & Harm Press Kit!</h1>

<div class="row">
  <PressKitImg imgId="logo" desc="logo" />
  <PressKitImg imgId="keyArt" desc="key art" />
  <PressKitImg imgId="sc1" desc="game screenshot" />
  <PressKitImg imgId="sc2" desc="dice rolling mechanic" />
</div>

<style>
  .row {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    text-align: center;
  }
</style>
