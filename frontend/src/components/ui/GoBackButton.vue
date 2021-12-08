<template>
  <span class="go-back">
    <button @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
    </button>
  </span>
</template>

<script>
export default {
  name: 'GoBackButton',
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  cursor: pointer;
  border: 0;
}
</style>
