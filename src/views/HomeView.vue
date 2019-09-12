<template>
  <div>
    <BaseCarousel />
    <br />
    <BaseTournament />
  </div>
</template>
<script>
import BaseCarousel from "@/components/BaseCarousel.vue";
import BaseTournament from "@/components/BaseTournament.vue";

export default {
  components: {
    BaseCarousel,
    BaseTournament
  }
};
</script>

<style lang="scss" scoped>
</style>