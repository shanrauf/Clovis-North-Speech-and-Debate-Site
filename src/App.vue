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
    <v-snackbar v-model="isSnackbarEnabled" :timeout="timeout" :color="snackbarColor">
      {{ snackbarMessage }}
      <v-btn color="white" text @click="disableSnackbar">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import BaseNav from "@/components/BaseNav.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BaseNav,
    BaseFooter
  },
  data() {
    return {
      timeout: 2000
    };
  },
  computed: {
    ...mapGetters(["snackbarColor", "getUser", "snackbarMessage"]),
    isSnackbarEnabled: {
      get() {
        return this.$store.getters.isSnackbarEnabled;
      },
      set() {
        this.disableSnackbar();
      }
    }
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || "ScanIn";
      this.notOnDashboard =
        window.location.pathname != "/dashboard" &&
        window.location.pathname != "/login" &&
        window.location.pathname != "/register";
    }
  },
  methods: {
    // goBack() {
    //   window.history.length > 1
    //     ? this.$router.go(-1)
    //     : this.$router.push("dashboard");
    // },
    disableSnackbar() {
      this.$store.commit("disableSnackbar");
    }
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
  background: #f5f2d0;
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
