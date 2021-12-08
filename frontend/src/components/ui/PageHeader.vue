<template>
 <v-app-bar
      class="page-app-bar"
      style="margin-top: 49px; z-index: 2"
      app
      color="white"
      dense
      flat
    >
    <h3> &nbsp;{{headerTitle}} </h3>
 </v-app-bar>
</template>

<script>

export default {
  name: 'PageHeader',
  components: {
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
.page-app-bar {
  border-bottom: 1px  solid #E0E0E0 !important;;
}
</style>
