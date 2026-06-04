<script>
  let { name, desc, cost, color1 = "black", color2 = "black", classes = "" } = $props();
</script>

<div class="charaskill col {classes}" style="border-top: 0.6rem solid {color1}; background-color: {color2};">
  <h2 class="skill-name">{name}</h2>
  <div class="desc row">
    <p>{desc}</p>
    <div class="cost col">
      <h4>++cost++</h4>
      <h4>{cost}</h4>
    </div>
  </div>
</div>

<style>
  .charaskill {
    position: relative;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;

    p,
    h4 {
      margin: 0;
      margin-top: 0.3rem;
    }

    .desc > p {
      width: 60%;
    }

    .cost {
      align-items: center;
      flex-grow: 1;
    }

    .skill-name {
      position: absolute;
      background-color: #474747;
      width: fit-content;
      text-align: center;
      width: 40%;
      margin: 0;
      padding: 0.7rem;

      transform: translateY(-130%);
    }
  }
</style>
