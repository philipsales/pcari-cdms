<template>
  <v-container fluid>
    <div class="module-home-container">
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createListContent"></landing-create>
          <landing-list-table :contents="tableContent"></landing-list-table>
        </v-container>
      </main>
    </div>
  </v-container>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';
import SidebarStandard from '../../components/sidebars/SidebarStandard.vue';

export default {
  name: 'ValusetList',
  components: {
    LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Valuesets',
        commands: [
          {
            link: 'ValuesetCreate',
            icon: 'mdi-plus-box',
            buttonName: 'Create Valueset',
          },
        ],
      },
      sidebarContent: {
        title: {
          description: 'Terminology Service',
          icon: 'mdi-database',
          link: 'TerminologyService',
        },
        items: [
          {
            title: 'Vocabulary',
            icon: 'mdi-home-city',
            link: 'VocabularyList',
          },
          {
            title: 'Valueset',
            icon: 'mdi-account',
            link: 'ValuesetList',
          },
        ],
      },
      tableContent: {
        headers: [
          {
            text: 'Term',
            align: 'start',
            sortable: false,
            value: 'term',
          },
          { text: 'Vocabulary', value: 'vocabulary' },
          { text: 'Status', value: 'status' },
          { text: 'Author', value: 'author' },
          { text: 'Storage', value: 'storage' },
          { text: 'Date Created', value: 'dateCreated' },
        ],
        rows: [
          {
            term: 'T2DM',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
          {
            term: 'd2tm',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
          {
            term: 'Diabetes Type 2',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
