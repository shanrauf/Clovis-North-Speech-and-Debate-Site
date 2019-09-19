<template>
  <v-container fluid class="admin-container">
    <v-row align="center" justify="center">
      <v-col cols="7">
        <v-select
          v-model="webpage"
          :items="webpages"
          :menu-props="{ bottom: true, offsetY: true }"
          label="Select which page to edit"
        ></v-select>
      </v-col>
    </v-row>

    <br />

    <BaseDataIterator v-if="webpage" :webpage="webpage" :createNewButton="true" />
  </v-container>
  <!-- <div class="form-container">
    <BaseForm />
  </div>-->
</template>

<script>
import { mapGetters } from "vuex";
import BaseForm from "@/components/BaseForm.vue";
import BaseDataIterator from "@/components/BaseDataIterator.vue";

export default {
  components: {
    BaseForm,
    BaseDataIterator
  },
  data() {
    return {
      webpage: "",
      webpages: [
        "Home",
        "Tournaments",
        "Calendar",
        "Sponsors",
        "Announcements",
        "About Us"
      ]
    };
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
  computed: {
    ...mapGetters(["getUser", "checkAuth"])
  }
};
</script>

<style lang="scss" scoped>
.admin-container {
  height: 2000px;
}
</style>