<script lang="ts">
  import CharacterAbility from "$lib/components/CharacterAbility.svelte";

  let { data } = $props();
</script>

<div class="content row">
  <div class="col">
    <h1>{data.character.name}</h1>
    <p>{data.character.description}</p>

    <div class="col">
      {#each data.character.skills as skill}
        <CharacterAbility
          name={skill.name}
          desc={skill.desc}
          cost={skill.cost}
          color1={data.character.color1}
          color2={data.character.color2}
        />
      {/each}
    </div>
  </div>

  <img src={data.character.image} class="charaimg" alt={data.character.name} />
</div>

<style>
  h1 {
    margin-bottom: 0;
  }

  .content {
    align-items: stretch;
		justify-content: space-around;
  }

  img {
    height: 100%;
    width: auto;
    margin: 1rem;
  }
</style>
