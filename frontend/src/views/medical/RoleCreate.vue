<template>
  <v-container class="generic-container">
  <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-card>
      <v-row class="">
        <v-col cols="6" class="role-section">
          <form style="background-color: rd">
            <v-row>
            <h2 class="role-form-subheader">Role Description</h2>
            </v-row>
            <br>
            <!-- <v-text-field
              outlined
              dense
              label="roleId"
              required
            ></v-text-field> -->
            <v-text-field
              outlined
              dense
              label="Role Name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Module"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="status"
              required
            ></v-text-field>

            <br>
            <v-row class="">
            <h2 class="role-form-subheader">Assigned Permissions</h2>
            <v-spacer></v-spacer>
            <v-btn
              text
              class="create-permission-button"
              @click.stop="roleDrawer = !roleDrawer"
            >
              <v-icon>mdi-plus</v-icon>
              Add Permission
            </v-btn>
            </v-row>
            <br>
              <v-data-table
                :headers="selectedPermissions.headers"
                :items="selectedPermissions.rows"
                :items-per-page="5"
                class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-icon color="blue darken-1"
                    v-model="item.action"
                    text >mdi-delete</v-icon>
                </template>
              </v-data-table>
              <br>
            <v-btn
              class="mr-4 primary">
              Submit
            </v-btn>
          </form>
        </v-col>
        <v-divider vertical inset></v-divider>
      </v-row>
    </v-card>
    <v-navigation-drawer
      v-model="roleDrawer"
      fixed
      right
      width="850px"
      temporary
    >
      <v-list-item>
        <h2 class="role-form-subheader">Add Permissions</h2>
      </v-list-item>

      <v-divider></v-divider>
        <v-col cols="12" class="overall-permission">
          <br>
          <v-data-table
            :headers="overallPermissions.headers"
            :items="overallPermissions.rows"
            item-key="permissionId"
            :items-per-page="15"
            show-select
            class="elevation-1">
          </v-data-table>
          <br>
          <v-btn
            @click.stop="roleDrawer = !roleDrawer"
            class="mr-4 primary">
            Add Permission
          </v-btn>
        </v-col>
    </v-navigation-drawer>
  <!-- </v-sheet> -->
    </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'RoleCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      roleDrawer: false,
      status: false,
      headerTitle: 'Create Role',
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      selectedPermissions: {
        headers: [
          { text: 'Module', value: 'module' },
          { text: 'Scope', value: 'scope' },
          { text: 'Function', value: 'function' },
          {
            text: '',
            value: 'action',
          },
        ],
        rows: [
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'create subset',
          },
        ],
      },
      overallPermissions: {
        headers: [
          {
            text: '',
            value: 'action',
          },
          { text: 'Module', value: 'module' },
          { text: 'Scope', value: 'scope' },
          { text: 'Function', value: 'function' },
          { text: 'Permission', value: 'permissionId' },
        ],
        rows: [
          {
            permissionId: '1',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            permissionId: '2',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            permissionId: '3',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>

.role-form-subheader {
  padding-left: 20px;
}
.role-section{
  padding: 40px;
}
.valueset-search {
  padding: 40px;
}
.create-permission-button {
  color: #6E0D1C;
  margin-right: 10px;
  letter-spacing: 0;
}
</style>
