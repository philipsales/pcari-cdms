<template>
  <div>
      <v-data-table
        :headers="contents.headers"
        :items="contents.rows"
        :items-per-page="5"
        class="elevation-1 rounded-0"
      ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'LandingListTable',
  props: {
    contents: {
      headers: Array,
      rows: Array,
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>
