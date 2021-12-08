<template>
  <v-container fluid>
    <div class="module-home-container">
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createListContent"></landing-create>
          <landing-list-table :contents="tableContent"></landing-list-table>
        </v-container>
      </main>
    </div>
  </v-container>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';
import SidebarStandard from '../../components/sidebars/SidebarStandard.vue';

export default {
  name: 'UserList',
  components: {
    LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Users',
        commands: [
          {
            link: 'UserCreate',
            icon: 'mdi-account-plus',
            buttonName: 'Add User',
          },
          {
            link: 'UserDelete',
            icon: 'mdi-account-minus',
            buttonName: 'Remove User',
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
            title: 'Users',
            icon: 'mdi-account-plus',
            link: 'UserList',
          },
          {
            title: 'Roles',
            icon: 'mdi-account-group',
            link: 'RoleList',
          },
          {
            title: 'Departments',
            icon: 'mdi-office-building',
            link: 'RoleList',
          },
          {
            title: 'Databases',
            icon: 'mdi-database',
            link: 'RoleList',
          },
        ],
      },
      tableContent: {
        headers: [
          {
            text: 'Member',
            align: 'start',
            sortable: true,
            value: 'member',
          },
          { text: 'Name', value: 'name' },
          { text: 'Role', value: 'role', sortable: true },
          { text: 'Security insights', value: 'securityInsights', sortable: true },
        ],
        rows: [
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
          {
            member: 'pjsales@ittc.up.edu.ph',
            name: 'Philip John Sales',
            role: 'Editor',
            securityInsights: '234/234 permissions',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.terminology-page {
  width: 100%;
  background-color: ed;
  height: 1000px;
}
.sidebar {
  z-index: 1;
  margin-top: -16px;
  min-width: 64px;
}
.first-list-item {
  padding-left: 15px;
  padding-top: 0px;
  margin-bottom: -12px;
}
.first-list-content {
  margin-left: -16px;
}
.next-list-item {
  padding-left: 21px;
}
.next-list-content {
  padding-top: 10px;
  margin-left: -10px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
