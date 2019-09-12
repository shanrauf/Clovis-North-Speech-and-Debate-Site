<template>
  <v-app id="app" class="overflow-hidden">
    <v-content
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
      style="height: 1000px;"
    >
      <BaseNav />
      <v-flex>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <BaseFooter />
      </v-flex>
    </v-content>
  </v-app>
</template>

<script>
import BaseNav from "@/components/BaseNav.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "App",
  components: {
    BaseNav,
    BaseFooter
  }
};
</script>

<style>
html {
  overflow-y: hidden !important;
}
body {
  font-size: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fafafa;
}
/* Router transitions */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
