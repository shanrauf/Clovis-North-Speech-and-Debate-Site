<template>
  <div>
    <BaseCarousel />
    <br />
    <UpcomingTournaments />
  </div>
</template>
<script>
import BaseCarousel from "@/components/BaseCarousel.vue";
import UpcomingTournaments from "@/components/UpcomingTournaments.vue";

export default {
  components: {
    BaseCarousel,
    UpcomingTournaments
  }
};
</script>

<style lang="scss" scoped>
</style>