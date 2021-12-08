<template>
  <v-container fluid>
    <div class="module-home-container">
      <!-- SIDEBAR -->
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <!-- MAIN PAGE -->
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createRoleContent"></landing-create>

  <v-row class="" style="">
  <v-col cols="12" style="background-color: ed">
    <v-card style="padding: 0px 5px;" class="rounded-sm">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search User"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-col>
  </v-row>

        </v-container>
      </main>
    </div>
  </v-container>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
// import LandingListTable from '../../components/layouts/LandingListTable.vue';
import SidebarStandard from '../../components/sidebars/SidebarStandard.vue';

export default {
  name: 'RoleList',
  components: {
    // LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createRoleContent: {
        pageTitle: 'Roles',
        commands: [
          {
            link: 'RoleCreate',
            icon: 'mdi-plus-box',
            buttonName: 'Create Role',
          },
        ],
      },
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
      ],
      sidebarContent: {
        title: {
          description: 'Access Management',
          icon: 'mdi-shield-account',
          link: 'UserList',
        },
        items: [
          {
            title: 'User',
            icon: 'mdi-account-plus',
            link: 'UserList',
          },
          {
            title: 'Role',
            icon: 'mdi-hat-fedora',
            link: 'RoleList',
          },
        ],
      },
      searchValuesetContent: {
        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: true,
            value: 'title',
          },
          { text: 'Module', value: 'module' },
          { text: 'Status', value: 'status' },
          { text: 'Permissions', value: 'permission' },
          { text: '', value: 'option' },
        ],
        rows: [
          {
            roleId: '1',
            title: 'Terminology Server Owner',
            module: 'Terminology Server',
            status: 'Enabled',
            permission: '3',
          },
          {
            roleId: '2',
            title: 'Terminology Server Editor',
            module: 'Terminology Server',
            status: 'Enabled',
            permission: '33',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>
