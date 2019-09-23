<template>
  <v-row justify="center">
    <v-card class="pa-4" width="450px" height="700px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <h1>
          {{mode.charAt(0).toUpperCase() + mode.slice(1)}}
          <span
            v-if="tournament"
          >{{tournament.value.name}}</span>
        </h1>
        <v-combobox
          v-model="tournamentName"
          :items="tournamentNames"
          label="Tournament Name"
          hide-no-data
          hide-selected
          single-line
          autofocus
          prepend-icon="$vuetify.icons.title"
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
          <v-date-picker v-model="date" no-title @input="menu1 = false" show-current></v-date-picker>
        </v-menu>

        <v-textarea
          v-model="description"
          label="Description"
          clearable
          auto-grow
          rows="1"
          prepend-icon="$vuetify.icons.comment"
        />

        <v-combobox
          v-model="location"
          :items="locations"
          label="Location"
          :rules="locationRules"
          hide-no-data
          hide-selected
          single-line
          prepend-icon="$vuetify.icons.directions"
        />

        <v-img :key="imageUrl" v-if="location" loading :src="image" width="200" height="100"></v-img>

        <v-file-input
          v-if="location"
          v-model="imageFile"
          :rules="imageInputRules"
          accept="image/jpeg"
          placeholder="Select an image"
          prepend-icon="$vuetify.icons.camera"
          label="Location photo"
          persistent-hint
          hint="This photo will override the existing photo for the selected location"
          @change="updateImage()"
        />

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
    },
    tournament: {
      type: Object,
      required: false
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      imageFile: null,
      mode: "create",
      baseUrl:
        "https://firebasestorage.googleapis.com/v0/b/clovisnorthforensics-aaeaa.appspot.com/o/images%2F",
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      valid: true,
      oldTimestamp: 0,
      tournamentName: "",
      locationRules: [v => !!v || "Location is required"],
      imageInputRules: [
        value =>
          !value ||
          value.size < 4000000 ||
          "Image size should be less than 4 MB!"
      ],
      description: "",
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
        "Bakersfield High School",
        "Granite Ridge Middle School",
        "Sanger High School",
        "Buchanan High School",
        "Chowchilla High School",
        "Bullard High School",
        "Orosi High School",
        "Clovis East High School",
        "UC Berkeley"
      ],
      checkbox: false
    };
  },
  created() {
    if (this.tournament) {
      this.mode = "edit"; // Tells Vuex to update entries, not create new entry
      this.tournamentName = this.tournament.value.name;
      this.description = this.tournament.value.description;
      this.location = this.tournament.value.location;
      this.image = this.locationImg;
      this.oldTimestamp = this.tournament.key;
      this.date = new Date(parseInt(this.oldTimestamp))
        .toISOString()
        .substr(0, 10);
    }
  },
  computed: {
    formattedLocation() {
      return this.location.replace(" ", "%20");
    },
    locationImg() {
      return `${this.baseUrl}${this.formattedLocation}.jpg?alt=media`;
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    updateImage() {
      this.image = URL.createObjectURL(this.imageFile);
    },
    processForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch({
          type: "onUpdateTournament",
          name: this.tournamentName,
          timestamp: new Date(this.date + "T07:00:00Z").getTime(),
          oldTimestamp: this.oldTimestamp,
          description: this.description,
          location: this.location,
          mode: this.mode
        });
        this.$store.dispatch({
          type: "uploadImage",
          imageFile: this.imageFile,
          location: this.location // used to rename file
        });
        this.$emit("update:overlay", false);
        this.$emit("update:imageUrl", this.image);
      }
    }
  }
};
</script>
