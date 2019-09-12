<template>
  <div>
    <v-card class="mx-auto" max-width="400" raised>
      <v-img class="white--text" height="200px" src="../assets/images/clovisnorthHS.jpg">
        <v-card-title class="align-end fill-height">Example Speech/Debate Tournament</v-card-title>
      </v-img>

      <v-card-text>
        <span>September 12, 2019</span>
        <br />
        <span class="text--primary">
          <span>Clovis North High School</span>
        </span>
      </v-card-text>

      <v-card-actions>
        <v-btn text color="orange" @click="overlay = !overlay">Apply to Judge</v-btn>
      </v-card-actions>
    </v-card>
    <v-overlay :value="overlay">
      <JudgeForm />
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
import JudgeForm from "@/components/JudgeForm.vue";
export default {
  components: {
    JudgeForm
  },
  data() {
    return {
      overlay: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>