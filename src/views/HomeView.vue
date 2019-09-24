<template>
  <div>
    <BaseCarousel />

    <br />

    <h1 align="center">Upcoming Tournaments</h1>
    <BaseDataIterator
      :items="getItems('tournaments')"
      :create-new-button="false"
      :items-per-page="4"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BaseCarousel from "@/components/BaseCarousel.vue";
import BaseDataIterator from "@/components/BaseDataIterator.vue";

export default {
  components: {
    BaseCarousel,
    BaseDataIterator
  },
  computed: {
    ...mapGetters(["getItems"])
  },
  beforeCreate() {
    this.$store.dispatch("createTournaments");
  }
};
</script>

<style lang="scss" scoped>
</style>