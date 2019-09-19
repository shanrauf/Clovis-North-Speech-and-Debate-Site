<template>
  <div>
    <BaseCarousel />

    <br />

    <BaseDataIterator :createNewButton="false" :webpage="'Upcoming Tournaments'" />
  </div>
</template>
<script>
import BaseCarousel from "@/components/BaseCarousel.vue";
import BaseDataIterator from "@/components/BaseDataIterator.vue";

export default {
  components: {
    BaseCarousel,
    BaseDataIterator
  }
};
</script>

<style lang="scss" scoped>
</style>