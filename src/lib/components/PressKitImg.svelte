<script>
  import { img } from "../../routes/img";
  let {imgId, desc } = $props();
</script>

<div class="pressKitImg col">
  <img src={img[imgId]} alt={desc} />
  <p class="desc">{desc}</p>
</div>

<style>
  div {
    width: 40%;
  }

  img {
    width: 100%;
  }

  p {
    text-align: center;
  }
</style>
