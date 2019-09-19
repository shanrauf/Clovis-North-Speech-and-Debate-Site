<template>
  <v-card class="tournament-card mx-auto" max-width="450" height="350px" raised>
    <v-icon class="close-icon-corner" @click="confirmOverlay = true">$vuetify.icons.close</v-icon>
    <v-icon class="edit-icon-corner" @click="formOverlay = true">$vuetify.icons.edit</v-icon>
    <v-img class="card-image white--text" height="200px" src="../assets/images/clovisnorthHS.jpg">
      <v-card-title class="align-end fill-height">
        <span class="card-title">Example Speech/Debate Tournament</span>
      </v-card-title>
    </v-img>

    <v-card-text>
      <span>September 12, 2019</span>
      <br />
      <span class="text--primary">
        <span>Clovis North High School</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="orange" @click="confirmOverlay = !confirmOverlay">Results</v-btn>
    </v-card-actions>
    <v-overlay :value="confirmOverlay">
      <v-card>
        <v-card-title>Are you sure?</v-card-title>
        <v-card-actions>
          <v-btn color="primary" @click="confirmOverlay = false">Yes</v-btn>
          <v-btn color="error" @click="confirmOverlay = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      confirmOverlay: false,
      formOverlay: false // find way to open form filled out w correct tournament info
    };
  }
};
</script>

<style lang="scss" scoped>
.tournament-card {
  position: relative;
}
.close-icon-corner {
  position: absolute;
  right: 7px;
  top: 7px;
  z-index: 2;
}
.edit-icon-corner {
  position: absolute;
  right: 35px;
  top: 7px;
  z-index: 2;
}
.card-title {
  text-shadow: 0px 0px 6px black;
}
.card-image {
  z-index: 1;
}
</style>
