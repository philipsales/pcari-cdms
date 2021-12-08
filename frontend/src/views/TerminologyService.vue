<template>
  <!-- <v-container fluid>
    <div class="module-home-container">
      <aside class="aside">
        <router-view name="sidebar" :contents="sidebarContent"></router-view>
      </aside>
      <main>
        <router-view name="default"></router-view>
      </main>
    </div>
  </v-container> -->
  <div>
    <router-view name="default"></router-view>
  </div>
</template>

<script>
export default {
  name: 'TerminologyService',
  components: {
  },
  data() {
    return {
      drawer: true,
      // mini: true,
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
    };
  },
};
</script>
<style scoped>
</style>
