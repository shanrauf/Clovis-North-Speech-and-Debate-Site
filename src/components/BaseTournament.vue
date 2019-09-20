<template>
  <v-card class="tournament-card mx-auto" max-width="450" height="350px" raised>
    <v-icon class="close-icon-corner" @click="confirmOverlay = true">$vuetify.icons.close</v-icon>
    <v-icon class="edit-icon-corner" @click="formOverlay = true">$vuetify.icons.edit</v-icon>
    <v-img class="card-image white--text" height="200px" src="../assets/images/clovisnorthHS.jpg">
      <v-card-title class="align-end fill-height">
        <span class="card-title">{{item.value.name}}</span>
      </v-card-title>
    </v-img>

    <v-card-text>
      <span>{{formatTimestamp(parseInt(item.key))}}</span>
      <br />
      <span class="text--primary">
        <span>Clovis North High School</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="orange" @click="confirmOverlay = !confirmOverlay">Results</v-btn>
    </v-card-actions>
    <v-overlay :value="confirmOverlay">
      <v-card>
        <v-card-title>Are you sure?</v-card-title>
        <v-card-actions>
          <v-btn color="primary" @click="confirmOverlay = false">Yes</v-btn>
          <v-btn color="error" @click="confirmOverlay = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
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
</style>
