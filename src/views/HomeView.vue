<template>
  <div>
    <BaseCarousel />

    <br />

    <h1 align="center">Upcoming Tournaments</h1>
    <BaseDataIterator :items="getItems('tournaments')" :createNewButton="false" />
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
  beforeCreate() {
    this.$store.dispatch("createTournaments");
  },
  computed: {
    ...mapGetters(["getItems"])
  }
};
</script>

<style lang="scss" scoped>
</style>