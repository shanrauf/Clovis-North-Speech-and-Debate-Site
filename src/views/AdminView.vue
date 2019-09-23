<template>
  <v-container fluid class="admin-container">
    <v-row align="center" justify="center">
      <v-col cols="7">
        <v-select
          v-model="currentComponent"
          :items="editableComponents"
          :menu-props="{ bottom: true, offsetY: true }"
          label="Select which page to edit"
        ></v-select>
      </v-col>
    </v-row>

    <br />

    <BaseDataIterator v-if="currentComponent" :items="getData()" :create-new-button="true" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseDataIterator from "@/components/BaseDataIterator.vue";

export default {
  components: {
    BaseDataIterator
  },
  data() {
    return {
      currentComponent: "",
      editableComponents: [
        "Slideshow",
        "Tournaments",
        "Calendar",
        "Sponsors",
        "Announcements",
        "About"
      ]
    };
  },
  computed: {
    ...mapGetters(["getUser", "checkAuth", "getItems", "checkItems"])
  },
  created() {
    let currentUser = this.getUser;
    if (!currentUser) {
      this.checkAuth.then(user => {
        if (user) {
          this.$store.dispatch("createUser", user);
          // this.$store.dispatch("createSomething", user.uid);
        } else {
          this.$store.dispatch("sendToLogin");
        }
      });
    } else {
      // this.$store.dispatch("createSomething", currentUser.uid);
    }
  },
  methods: {
    getData() {
      if (!this.checkItems(this.currentComponent)) {
        this.$store.dispatch("create" + this.currentComponent);
      }
      return this.getItems("tournaments");
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-container {
  height: 2000px;
}
</style>