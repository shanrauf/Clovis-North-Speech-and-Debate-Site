<template>
  <v-window v-model="onboarding" continuous show-arrows-on-hover>
    <v-window-item v-for="n in carouselLength" :key="`item-${n}`">
      <v-img :src="`../assets/images/photo${n}.jpg`">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="i in carouselLength"
          :key="`btn-${i}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      carouselLength: 3,
      onboarding: 0,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.carouselLength ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.carouselLength - 1 : this.onboarding - 1;
    },
  },
};
</script>
