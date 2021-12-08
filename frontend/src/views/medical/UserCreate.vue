<template>
  <v-container class="generic-container">
  <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-card>
      <v-row class="">
        <v-col
          cols="6"
          md="5"
          xl="3"
          class="role-section">
          <form style="background-color: rd">
            <v-row>
            <h2 class="role-form-subheader">Add Members</h2>
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
              label="Member email"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="First members"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Last name"
              required
            ></v-text-field>
            <div v-for="(demographic, index) in demographics"
                  :key=index>
              <v-row align="center">
                <v-col
                  class="d-flex"
                  cols="12"
                  sm="10">
                  <v-select
                    v-model="value"
                    :items="roles"
                    dense
                    outlined
                    attach
                    label="Select a role"
                    multiple
                  >
                  </v-select>
                  </v-col>
                  <v-btn
                    class="dynamic-delete-button"
                    @click="removeMultipleField(index)">
                    <v-icon outlined dense>mdi-delete</v-icon>
                  </v-btn>
                </v-row>
                  </div>
            <v-spacer></v-spacer>
            <v-btn
              text
              class="create-permission-button"
              @click="addDemographics"
            >
              <v-icon>mdi-plus</v-icon>
              Add Another Role
            </v-btn>
            <br>
            <br>
            <v-btn
              class="mr-4 primary">
              Submit
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-card>
  <!-- </v-sheet> -->
    </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'UserCreate',
  components: {
    GoBackHeader,
  },
  methods: {
    addField() {
      this.textFields.push({
        value: '',
      });
    },
    addDemographics() {
      this.demographics.push({
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      });
    },
    removeMultipleField(index) {
      this.demographics.splice(index, 1);
    },
  },
  data() {
    return {
      roleDrawer: false,
      headerTitle: 'Create Role',
      demographics: [{
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      }],
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      roles: [
        'Terminology Server Owner',
        'Terminology Server Editor',
        'Terminology Server Viewer',
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
