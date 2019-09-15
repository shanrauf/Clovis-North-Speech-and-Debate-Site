<template>
  <div>
    <BaseTournament />

    <br />

    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>
<script>
import BaseTournament from "@/components/BaseTournament.vue";

export default {
  components: {
    BaseTournament
  }
};
</script>

<style lang="scss" scoped>
</style>

