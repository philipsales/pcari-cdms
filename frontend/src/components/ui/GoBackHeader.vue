<template>
 <v-app-bar
      class="goback-app-bar"
      style="margin-top: 49px; z-index: 2"
      app
      color="white"
      dense
      flat
    >
    <go-back-button></go-back-button>
    <h3> &nbsp; &nbsp; &nbsp;{{headerTitle}} </h3>
 </v-app-bar>
</template>

<script>
import GoBackButton from './GoBackButton.vue';

export default {
  name: 'GoBackHeader',
  components: {
    GoBackButton,
  },
  props: {
    headerTitle: String,
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.goback-app-bar {
  border-bottom: 1px  solid #E0E0E0 !important;;
}
.back-header {
  height: 50px;
  margin: 1px 5px 10px 3px;
}
</style>
