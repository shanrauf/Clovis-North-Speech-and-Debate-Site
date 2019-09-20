<template>
  <FlipCard :flipped="flipped">
    <template slot="front">
      <v-card class="tournament-card mx-auto" max-width="450" height="350px" raised>
        <div v-if="$route.path.includes('/admin')">
          <v-icon class="close-icon-corner" @click="confirmOverlay = true">$vuetify.icons.close</v-icon>
          <v-icon class="edit-icon-corner" @click="formOverlay = true">$vuetify.icons.edit</v-icon>
        </div>
        <v-img
          class="card-image white--text"
          height="200px"
          src="../assets/images/Clovis North High School.jpg"
        >
          <v-card-title class="align-end fill-height">
            <span class="card-title">{{item.value.name}}</span>
          </v-card-title>
        </v-img>

        <v-card-text>
          <span>{{formatTimestamp(parseInt(item.key))}}</span>
          <br />
          <span class="text--primary">
            <span>{{item.value.location}}</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="item.value.description" color="primary" @click="flipped = !flipped">More Info</v-btn>
          <v-btn
            v-if="item.value.results"
            color="orange"
            @click="confirmOverlay = !confirmOverlay"
          >Results</v-btn>

          <div class="flex-grow-1" />

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" class="mx-2" fab dark small color="success">
                <v-icon>$vuetify.icons.directions</v-icon>
              </v-btn>
            </template>
            <span>Directions</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
      <v-overlay :value="confirmOverlay">
        <v-card>
          <v-card-title>{{`Are you sure you want to delete ${item.value.name}?`}}</v-card-title>
          <v-card-text>This action cannot be undone...</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="confirmOverlay = false">Yes</v-btn>
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
          <v-icon class="close-icon-corner" @click="confirmOverlay = true">$vuetify.icons.close</v-icon>
          <v-icon class="edit-icon-corner" @click="formOverlay = true">$vuetify.icons.edit</v-icon>
        </div>

        <v-card-title>
          <span>{{item.value.name}}</span>
        </v-card-title>

        <v-card-text>{{item.value.description}}</v-card-text>

        <v-card-actions>
          <v-btn text color="primary" @click="flipped = !flipped">Back</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </FlipCard>
</template>

<script>
import FlipCard from "@/components/FlipCard.vue";
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    FlipCard
  },
  data() {
    return {
      flipped: false,
      confirmOverlay: false,
      formOverlay: false, // find way to open form filled out w correct tournament info
      months_arr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      let currentTime = Date.now();
      let timeDifference = currentTime - timestamp;
      if (timeDifference < 86400000) {
        return "Today";
      }
      if (timeDifference > 86400000 && timeDifference < 172800000) {
        return "Yesterday";
      }
      timestamp = new Date(timestamp);
      let year = timestamp.getFullYear();
      let month = this.months_arr[timestamp.getMonth()];
      let day = timestamp.getDate();
      let strTime = timestamp
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
      // MM dd, yyyy hh:mm AM/PM format
      let formattedTime = month + " " + day + ", " + year + " " + strTime;
      return formattedTime;
    }
  }
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
</style>
