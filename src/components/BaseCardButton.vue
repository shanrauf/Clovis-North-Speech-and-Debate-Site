<template>
  <v-hover v-slot:default="{ hover }">
    <v-card flat class="card-button-container">
      <v-col class="item">
        <v-icon color="black" x-large>{{icon}}</v-icon>
        <h1>{{label}}</h1>
      </v-col>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card-button-container {
  background-color: inherit;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  cursor: pointer;
}
</style>