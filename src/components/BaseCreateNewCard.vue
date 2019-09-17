<template>
  <v-card ripple class="card-container" height="350px">
    <v-container fluid>
      <v-flex>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-row align="center" justify="center" class="grey lighten-5" style="height: 300px;">
              <BaseCardButton :icon="'$vuetify.icons.add'" :label="'Create New'" />
            </v-row>
          </v-col>
        </v-row>
      </v-flex>
    </v-container>
  </v-card>
</template>

<script>
import BaseCardButton from "@/components/BaseCardButton.vue";
export default {
  components: {
    BaseCardButton
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  border: 2px dashed gray;
}
</style>