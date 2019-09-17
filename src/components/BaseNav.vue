<template>
  <v-app-bar
    color="primary"
    app
    dark
    shrink-on-scroll
    dense
    scroll-target="#scrolling-techniques"
    scroll-threshold="400"
    src="../assets/images/logo.png"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        contain
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <!-- <v-toolbar-title>CN Forensics</v-toolbar-title> -->

    <!-- <div class="flex-grow-1"></div> -->
    <template v-slot:extension>
      <v-tabs background-color="transparent" grow center-active>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About Us</v-tab>
        <v-tab to="/tournaments">Tournaments</v-tab>
        <v-tab to="/calendar">Calendar</v-tab>
        <v-tab to="/sponsors">Our Sponsors</v-tab>
        <v-tab to="/donate">Donate</v-tab>
        <v-tab to="/contact">Contact Us</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {};
</script>