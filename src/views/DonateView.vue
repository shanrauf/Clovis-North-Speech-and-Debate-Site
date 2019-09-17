<template>
  <div>
    <div class="container">
      <h1 class="description">Donate to Clovis North Forensics!</h1>
      <p class="description">
        Taking Forensics students to all of the tournaments comes with a high price. Any donation towards the team would directly facilitate the team's ability to compete.
        <strong>All proceeds benefit the members of the Clovis North Forensics team.</strong>
      </p>
    </div>

    <div class="donate">
      <h1>Donation Methods:</h1>
      <h2>1) Online (Click below):</h2>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="CH7UZLC7GLYEN" />
        <input
          type="image"
          width="25%"
          height="25%"
          class="img-fluid"
          src="../assets/images/donatebutton.png"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <!-- <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"> -->
      </form>

      <h2>2) Written Check (Example below):</h2>
      <img
        id="check"
        class="img-fluid"
        width="50%"
        height="50%"
        src="@/assets/images/template-check.jpg"
      />

      <br />
      <h4>
        <strong>NOTE: Non-Profit 501(C) (3) - TAX-ID # 71-1036638</strong>
      </h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.description {
  text-align: center;
}

.donate {
  text-align: center;
}

#check {
  min-height: 20%;
  min-width: 40%;
}
</style>