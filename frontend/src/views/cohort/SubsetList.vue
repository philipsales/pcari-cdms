<template>
  <v-container class="generic-table-page">
    <landing-create :contents="createListContent"></landing-create>
    <landing-list-table :contents="subsetTableContent"></landing-list-table>
  </v-container>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';

export default {
  name: 'SubsetList',
  components: {
    LandingListTable,
    LandingCreate,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Subsets',
        commands: [
          {
            link: 'SubsetCreate',
            icon: 'mdi-plus-box',
            buttonName: 'Create Subset',
          },
        ],
      },
      subsetTableContent: {
        headers: [
          {
            text: 'Subset Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Description', sortable: true, value: 'description' },
          { text: 'Author', sortable: true, value: 'author' },
          { text: 'Date Created', sortable: true, value: 'dateCreated' },
          { text: 'Date Updated', sortable: true, value: 'dateUpdated' },
        ],
        rows: [
          {
            name: 'Cardiovascular Diseases',
            description: 'SANOFI Cardio-CKD Repots',
            dateCreated: '2021-06-12 12:00:34',
            dateUpdated: '2021-06-12 12:00:34',
            author: 'Philip',
          },
          {
            name: 'Ulcer Medications',
            description: 'SANOFI Cardio-CKD Repots',
            dateCreated: '2021-06-13 11:10:23',
            dateUpdated: '2021-06-13 10:30:34',
            author: 'Philip',
          },
          {
            name: 'NSAID Medications',
            description: 'SANOFI Cardio-CKD Repots',
            dateCreated: '2021-06-12 12:00:34',
            dateUpdated: '2021-06-12 12:00:34',
            author: 'Philip',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
