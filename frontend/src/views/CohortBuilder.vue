<template>
  <v-container fluid>
  <div class="module-home-container">
    <aside class="aside">
      <router-view name="sidebar" :contents="sidebarContent"></router-view>
    </aside>
    <main>
      <router-view name="default"></router-view>
    </main>
  </div>
  </v-container>
</template>

<script>
export default {
  name: 'CohortBuilder',
  data() {
    return {
      drawer: true,
      // mini: true,
      sidebarContent: {
        title: {
          description: 'Cohort Builder',
          icon: 'mdi-account-multiple-check',
          link: 'CohortBuilder',
        },
        items: [
          {
            title: 'Subset',
            icon: 'mdi-view-list',
            link: 'SubsetList',
          },
          {
            title: 'Cohort',
            icon: 'mdi-clipboard-list-outline',
            link: 'CohortList',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
