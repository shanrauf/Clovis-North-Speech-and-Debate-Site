<template>
  <v-row justify="center">
    <v-card class="ma-3 pa-6" width="450px" height="450px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-combobox
          v-model="tournamentName"
          :items="tournamentNames"
          label="Tournament Name"
          @blur="findImageFromTournamentName"
          hide-no-data
          hide-selected
          single-line
          autofocus
        />

        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="300px"
          min-width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date"
              hint="YYYY-MM-DD format"
              persistent-hint
              prepend-icon="event"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false" show-current="2019-09-17"></v-date-picker>
        </v-menu>

        <v-text-field
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          clearable
        />

        <v-combobox
          v-model="location"
          :items="locations"
          label="Location"
          :rules="locationRules"
          hide-no-data
          hide-selected
          single-line
        />

        <div v-if="location">Image here</div>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must check this box to continue!']"
          label="Are you sure?"
          required
        />

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="processForm">Submit</v-btn>

        <v-btn color="error" @click="$emit('update:overlay', false)">Close</v-btn>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    overlay: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      valid: true,
      tournamentName: "",
      locationRules: [v => !!v || "Location is required"],
      description: "",
      descriptionRules: [v => !!v || "Description is required"],
      select: null,
      location: "",
      tournamentNames: [
        "Novice I.E",
        "I.E #1",
        "I.E #2",
        "I.E #3",
        "A Quals",
        "B Quals",
        "Novice Debate",
        "Wahzoo #1",
        "Wahzoo #2",
        "Wahzoo #3",
        "State Qualifiers Debate",
        "CHSSA State Tournament"
      ],
      types: [
        "Home",
        "Tournaments",
        "Calendar",
        "Sponsors",
        "Announcements",
        "About Us"
      ],
      locations: [
        "Clovis North High School",
        "Granite Ridge Middle School",
        "Sanger High School",
        "Buchanan High School",
        "Chowchilla High School",
        "Bullard High School",
        "Orosi High School",
        "Clovis East High School"
      ],
      checkbox: false
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    findImageFromTournamentName() {
      // look for img name
    },
    processForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch({
          type: "onAddTournament",
          name: this.tournamentName,
          timestamp: new Date(this.date).getTime() / 1000,
          description: this.description,
          location: this.location
        });
      } else {
        this.$store.commit({
          type: "setSnackbar",
          color: "error",
          message: "There was an error...",
          enabled: true
        });
      }
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  }
};
</script>
