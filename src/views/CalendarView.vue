<template>
  <div class="google-calendar">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=00tsndto5hvflh9kp967pkq51c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
      style="border-width:0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.google-calendar {
  position: relative;
  height: 0;
  width: 50%;
  padding-bottom: 50%;
}

.google-calendar iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>