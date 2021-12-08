<template>
  <v-container class="generic-container">
  <page-header :headerTitle="headerTitle"></page-header>
    <v-card>
      <v-row class="">
        <v-col
          cols="6"
          md="4"
          xl="3"
          class="role-section">
          <form style="background-color: rd">
            <v-row>
              <h2 class="role-form-subheader">General Information</h2>
            </v-row>
            <br>
            <v-text-field
              outlined
              dense
              label="First name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Last name"
              required
            ></v-text-field>
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
import PageHeader from '../../components/ui/PageHeader.vue';

export default {
  name: 'UserCreate',
  components: {
    PageHeader,
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
      headerTitle: 'User Account Settings',
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
