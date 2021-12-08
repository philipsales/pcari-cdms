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
              </v-card>
                <v-data-table
                  :headers="searchValuesetContent.headers"
                  :items="searchValuesetContent.rows"
                  item-key="roleId"
                  :search="search"
                  show-select
                  :items-per-page="5"
                  class="elevation-1">
                  <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="Searches"
                    single-line
                    hide-details
                  ></v-text-field>
                  <template v-slot:item.option="{ item }">
                    <a href="" class="descendant linkable">
                    <v-icon color="blue darken-1"
                      v-model="item.option"
                      text
                    >mdi-magnify</v-icon>
                    </a>
                  </template>
                </v-data-table>
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
      search: '',
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
