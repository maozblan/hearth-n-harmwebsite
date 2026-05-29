<script>
  import { resolve } from "$app/paths";
  import { img } from "../../routes/img";
  let { name, imgId, href = "/", classes = "" } = $props();
</script>

<a href={resolve(href)} data-MenuIcon={name} class="col {name} {classes}">
  <img src={img[imgId]} alt="{name} pfp" />
  <p class="id">{name}</p>
</a>

<style>
  a {
    width: 7rem;
    margin: 0.5rem;
  }

  img {
    width: 100%;
  }

  p {
    text-align: center;
  }
</style>
