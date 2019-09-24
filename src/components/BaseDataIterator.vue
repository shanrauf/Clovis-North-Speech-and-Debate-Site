<template>
  <v-container fluid>
    <v-data-iterator
      :page="page"
      :items="items"
      :items-per-page="formattedItemsPerPage"
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

      <template v-if="$route.path.includes('/admin')" v-slot:no-data>
        <v-alert color="primary" icon="info">Create a tournament below:</v-alert>
        <BaseCreateNewCard />
      </template>
    </v-data-iterator>

    <div class="text-center">
      <v-pagination v-if="showPagination" v-model="page" :length="numberOfPages" circle></v-pagination>
    </div>
  </v-container>
</template>

<script>
const BaseCreateNewCard = () => import("@/components/BaseCreateNewCard.vue");
import BaseTournament from "@/components/BaseTournament.vue";

export default {
  components: {
    BaseCreateNewCard,
    BaseTournament
  },
  props: {
    createNewButton: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      page: 1
    };
  },
  computed: {
    formattedItemsPerPage() {
      if (this.createNewButton && this.page == 1) {
        return 1 + this.itemsPerPage;
      } else {
        return this.itemsPerPage;
      }
    },
    numberOfPages() {
      return Math.ceil(this.items.length / this.formattedItemsPerPage);
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
