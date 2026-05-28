<script lang="ts">
	let { data } = $props();
</script>

<h1>{data.enemy.name}</h1>

<img src={data.enemy.image} alt={data.enemy.name} />

<p>{data.enemy.description}</p>

