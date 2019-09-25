<template>
  <v-container>
    <h1 align="center">Tournaments</h1>
    <BaseDataIterator
      :items="getItems('tournaments')"
      :create-new-button="false"
      :items-per-page="16"
    />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseDataIterator from "@/components/BaseDataIterator.vue";
export default {
  components: {
    BaseDataIterator
  },
  computed: {
    ...mapGetters(["getUser", "checkAuth", "getItems", "checkItems"])
  },
  created() {
    this.$store.dispatch("createTournaments");
  }
};
</script>

<style lang="scss" scoped>
</style>