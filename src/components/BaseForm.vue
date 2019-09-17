<template>
  <v-row justify="center">
    <v-card class="ma-3 pa-6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="title" :rules="titleRules" label="Title" required></v-text-field>

        <v-text-field v-model="description" :rules="descriptionRules" label="Description" required></v-text-field>

        <v-select
          v-model="select"
          :items="types"
          :rules="[v => !!v || 'Type is required']"
          label="Type"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must check this box to continue!']"
          label="Are you sure?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      title: "",
      titleRules: [v => !!v || "Title is required"],
      description: "",
      descriptionRules: [v => !!v || "Description is required"],
      select: null,
      types: [
        "Home",
        "Tournaments",
        "Calendar",
        "Sponsors",
        "Announcements",
        "About Us"
      ],
      checkbox: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>