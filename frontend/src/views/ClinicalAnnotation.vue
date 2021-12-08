<template>
 <v-container fluid>
  <div class="module-home-container">>
    <aside class="aside" >
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
  name: 'ClinicalAnnotation',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Project', icon: 'mdi-home-city' },
      ],
      mini: true,
      sidebarContent: {
        title: {
          description: 'Clinical Annotation',
          icon: 'mdi-pencil-box-multiple',
          link: 'ClinicalAnnotation',
        },
        items: [
          {
            title: 'Project',
            icon: 'mdi-home-city',
            link: 'ProjectList',
          },
          {
            title: 'Review',
            icon: 'mdi-clipboard-list-outline',
            link: 'ReviewList',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
