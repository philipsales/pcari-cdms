<template>
  <v-container>
    <header-app></header-app>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/up-pgh-biobank.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <!-- Biobank Platform -->
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12" >
        <v-row justify="center"> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderApp from '../components/layouts/HeaderApp.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderApp,
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Vocabulary', icon: 'mdi-home-city' },
        { title: 'Valueset', icon: 'mdi-account' },
      ],
      mini: true,
    };
  },
};
</script>
<style scoped>
</style>
