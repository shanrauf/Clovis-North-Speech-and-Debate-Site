<template>
  <div>
    <FlipCard
      :flipped="flipped"
      :class="{
        'grayscale-overlay':
          Date.now() - parseInt(this.tournament.key) > 172800000,
      }"
    >
      <template slot="front">
        <v-card
          class="tournament-card mx-auto"
          max-width="450"
          height="350px"
          raised
        >
          <div v-if="$route.path.includes('/admin')">
            <v-icon
              color="white"
              class="close-icon-corner"
              @click="confirmOverlay = true"
              >$vuetify.icons.close</v-icon
            >
            <v-icon
              color="white"
              class="edit-icon-corner"
              @click="editOverlay = true"
              >$vuetify.icons.edit</v-icon
            >
          </div>
          <v-img
            :key="imageUrl"
            class="card-image white--text"
            height="200px"
            :src="imageUrl"
            gradient="to top right, rgba(25,118,210,.8), rgba(25,32,72,.7)"
            transition="fade-transition"
          >
            <v-card-title class="align-end fill-height">
              <span class="card-title">{{ tournament.value.name }}</span>
            </v-card-title>
          </v-img>

          <v-card-text>
            <span>{{ formatTimestamp(parseInt(tournament.key)) }}</span>
            <br />
            <span class="text--primary">
              <span>{{ tournament.value.location }}</span>
            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn
              v-if="tournament.value.description"
              color="primary"
              @click="flipped = !flipped"
              >More Info</v-btn
            >
            <v-btn
              v-if="tournament.value.results"
              color="orange"
              @click="confirmOverlay = !confirmOverlay"
              >Results</v-btn
            >

            <div class="flex-grow-1" />

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="success"
                  :href="formatDirections()"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon>$vuetify.icons.directions</v-icon>
                </v-btn>
              </template>
              <span>Directions</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
        <v-overlay :value="confirmOverlay">
          <v-card>
            <v-card-title>{{
              `Are you sure you want to delete ${tournament.value.name}?`
            }}</v-card-title>
            <v-card-text>This action cannot be undone...</v-card-text>
            <v-card-actions>
              <v-btn @click="onDeleteTournament">Yes</v-btn>
              <v-btn color="error" @click="confirmOverlay = false">No</v-btn>
            </v-card-actions>
          </v-card>
        </v-overlay>
      </template>
      <template slot="back">
        <v-card
          class="mx-auto card-description"
          max-width="450px"
          height="350px"
          max-height="350px"
          raised
        >
          <div v-if="$route.path.includes('/admin')">
            <v-icon class="close-icon-corner" @click="confirmOverlay = true"
              >$vuetify.icons.close</v-icon
            >
            <v-icon class="edit-icon-corner" @click="formOverlay = true"
              >$vuetify.icons.edit</v-icon
            >
          </div>

          <v-card-title>
            <span>{{ tournament.value.name }}</span>
          </v-card-title>

          <v-card-text>{{ tournament.value.description }}</v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="flipped = !flipped">Back</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </FlipCard>
    <v-overlay :value="editOverlay">
      <BaseForm
        :image-url.sync="imageUrl"
        :overlay.sync="editOverlay"
        :tournament="tournament"
      />
    </v-overlay>
  </div>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';
import BaseForm from '@/components/BaseForm.vue';
export default {
  components: {
    FlipCard,
    BaseForm,
  },
  props: {
    tournament: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: '',
      editOverlay: false,
      flipped: false,
      confirmOverlay: false,
      formOverlay: false,
      months_arr: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    };
  },
  computed: {
    formattedLocation() {
      return this.tournament.value.location.replace(' ', '%20');
    },
  },
  created() {
    this.baseUrl = '../assets/images/schools';
    this.imageUrl = `${this.baseUrl}/${this.tournament.value.location}.jpg`;
  },
  methods: {
    formatTimestamp(timestamp) {
      let currentTime = Date.now();
      let timeDifference = currentTime - timestamp;
      if (timeDifference < 86400000 && Math.sign(timeDifference) != -1) {
        return 'Today';
      }
      if (
        timeDifference > 86400000 &&
        timeDifference < 172800000 &&
        Math.sign(timeDifference) != -1
      ) {
        return 'Yesterday';
      }
      timestamp = new Date(timestamp);
      let year = timestamp.getFullYear();
      let month = this.months_arr[timestamp.getMonth()];
      let day = timestamp.getDate();
      // MM dd, yyyy format
      let formattedTime = month + ' ' + day + ', ' + year;
      return formattedTime;
    },
    formatDirections() {
      return 'https://google.com/maps/search/' + this.tournament.value.location;
    },
    onDeleteTournament() {
      this.$store.dispatch('onDeleteTournament', this.tournament);
      this.confirmOverlay = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.tournament-card {
  position: relative;
}
.close-icon-corner {
  position: absolute;
  right: 7px;
  top: 7px;
  z-index: 2;
}
.edit-icon-corner {
  position: absolute;
  right: 35px;
  top: 7px;
  z-index: 2;
}
.card-title {
  text-shadow: 0px 0px 6px black;
}
.card-image {
  z-index: 1;
}
.card-description {
  overflow: auto;
}
.grayscale-overlay {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: gray; /* IE 6-9 */
}
</style>
