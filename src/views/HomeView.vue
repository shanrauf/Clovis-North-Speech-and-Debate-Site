<template>
  <div>
    <BaseCarousel />

    <br />

    <h1 align="center">Upcoming Tournaments</h1>
    <BaseDataIterator :items="getUpcomingTournaments" :createNewButton="false" :itemsPerPage="4" />
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
    ...mapGetters(["getUpcomingTournaments"])
  },
  beforeCreate() {
    this.$store.dispatch("createTournaments");
  }
};
</script>

<style lang="scss" scoped>
</style>