<template>
  <v-container fluid>
    <v-data-iterator
      loading
      :page="page"
      :items="items"
      :items-per-page="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row wrap>
          <v-col v-if="page == 1 && createNewButton" cols="12" sm="6" md="4" lg="3">
            <BaseCreateNewCard />
          </v-col>
          <v-col v-for="(item, i) in props.items" :key="i" cols="12" sm="6" md="4" lg="3">
            <BaseTournament :tournament="item" />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

    <div class="text-center">
      <v-pagination v-if="showPagination" v-model="page" :length="numberOfPages" circle></v-pagination>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseCreateNewCard from "@/components/BaseCreateNewCard.vue";
import BaseTournament from "@/components/BaseTournament.vue";

export default {
  props: {
    createNewButton: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseCreateNewCard,
    BaseTournament
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    itemsPerPage() {
      if (this.createNewButton && this.page == 1) {
        return 7;
      } else {
        return 8;
      }
    },
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    showPagination() {
      if (this.items.length > 7 && createNewButton) {
        return true;
      } else if (this.items.length > 8) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
