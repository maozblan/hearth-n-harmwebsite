<script lang="ts">
	let { data } = $props();
</script>

<h1>{data.character.name}</h1>

<img src={data.character.image} alt={data.character.name} />

<p>{data.character.description}</p>

