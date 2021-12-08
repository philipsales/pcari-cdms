<template>
  <v-container class="generic-table-page">
    <landing-create :contents="createListContent"></landing-create>
    <landing-list-table :contents="tableContent"></landing-list-table>
  </v-container>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';

export default {
  name: 'CohortList',
  components: {
    LandingListTable,
    LandingCreate,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Cohorts',
        commands: [
          {
            link: 'CohortCreate',
            icon: 'mdi-plus-box',
            buttonName: 'Create Cohort',
          },
        ],
      },
      tableContent: {
        headers: [
          {
            text: 'Index',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Index name', value: 'indexName' },
          { text: 'version', value: 'version' },
          { text: 'Environment', value: 'environment' },
          { text: 'Status', value: 'status' },
          { text: 'Date Created', value: 'dateCreated' },
          { text: 'Storage', value: 'storage' },
          { text: 'URL', value: 'url' },
        ],
        rows: [
          {
            name: 'Medication List',
            indexName: 'medication-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
          },
          {
            name: 'Diagnosis List',
            indexName: 'diagnosis-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/diagnosis-2021.v5.0.0',
          },
          {
            name: 'Procedure List',
            indexName: 'procedure-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
          },
          {
            name: 'Problem or Complaint List',
            indexName: 'problem-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
