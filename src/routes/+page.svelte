<script lang="ts">
  import { resolve } from "$app/paths";
  import { img } from "./img";
</script>

<div id="cover">
  <img id="background" src={img.keyArt} alt="key art not loading..." />
  <a href={resolve("/wiki")}><button>Let's Go!</button></a>
</div>

<style>
  img#background {
    height: 95%;
    width: auto;
    align-self: center;
  }

  div#cover {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      position: relative;
      left: 68%;
      bottom: 26%;
      button {
        background-color: var(--black);
        font-family: "Silkscreen", monospace;
				transform: scale(1.7);
      }
    }
  }
</style>
