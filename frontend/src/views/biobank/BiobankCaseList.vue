<template>
  <v-container fluid>
    <div class="module-home-container">
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createListContent"></landing-create>
          <!-- <landing-list-table :contents="tableContent"></landing-list-table> -->
          <v-row class="" style="">
            <v-col cols="12" style="background-color: ed">
              <v-card style="padding: 0px 5px;" class="rounded-sm">
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card>
                <v-data-table
                  :headers="searchValuesetContent.headers"
                  :items="searchValuesetContent.rows"
                  item-key="caseNumber"
                  show-select
                  :items-per-page="5"
                  class="elevation-1">
                  <template v-slot:item.option="{ item }">
                    <a href="" class="descendant linkable">
                    <v-btn text color="#f0ad4e" class="create-button">
                      <router-link
                        class="create-link"
                        :to="{name: item.link }"
                      >
                      <h4>
                      <v-icon v-model="item.option"
                        text
                      >mdi-application-edit-outline</v-icon>
                      Data Entry
                      </h4>
                      </router-link>
                    </v-btn>
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
  name: 'MedicalCaseList',
  components: {
    // LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Cases',
        commands: [
          {
            link: 'UserCreate',
            icon: 'mdi-plus',
            buttonName: 'Create Case',
          },
        ],
      },
      sidebarContent: {
        title: {
          description: 'Biobank Registry',
          icon: 'mdi-flask-outline',
          link: 'BiobankCaseList',
        },
        items: [
          {
            title: 'Cases',
            icon: 'mdi-stethoscope',
            link: 'UserList',
          },
          {
            title: 'Agreement Forms',
            icon: 'mdi-file-document',
            link: 'UserList',
          },
          {
            title: 'Protocol Number',
            icon: 'mdi-content-copy',
            link: 'RoleList',
          },
          {
            title: 'Specimens',
            icon: 'mdi-beaker',
            link: 'RoleList',
          },
          {
            title: 'Specimen Types',
            icon: 'mdi-group',
            link: 'RoleList',
          },
          {
            title: 'Reports',
            icon: 'mdi-chart-areaspline',
            link: 'RoleList',
          },
        ],
      },
      searchValuesetContent: {
        headers: [
          {
            text: 'Case Number',
            align: 'start',
            sortable: true,
            value: 'caseNumber',
          },
          { text: 'Diagnosis', value: 'diagnosis' },
          { text: 'Date Created', value: 'dateCreated', sortable: true },
          { text: 'Status', value: 'status', sortable: true },
          { text: '', value: 'option' },
        ],
        rows: [
          {
            caseNumber: 'BRCA001A',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Nov 08, 2021',
            status: 'Active',
            link: '/8423423432',
          },
          {
            caseNumber: 'BRCA001B',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Nov 09, 2021',
            status: 'Active',
            link: '/8423423432',
          },
          {
            caseNumber: 'BRCA001C',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Nov 18, 2021',
            status: 'Active',
            link: '/8423423432',
          },
          {
            caseNumber: 'BRCA002A',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Dec 08, 2021',
            status: 'Active',
            link: '/8423423432',
          },
          {
            caseNumber: 'BRCA002C',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Dec 18, 2021',
            status: 'Active',
            link: '/8423423432',
          },
          {
            caseNumber: 'BRCA003A',
            diagnosis: 'central portion of breast neoplasm',
            dateCreated: 'Dec 14 2021',
            status: 'Active',
            link: '/8423423432',
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
.create-button {
  color: white;
  margin-top: -3px;
  margin-left: 20px;
  border: none;
  background: none;
  padding-top: 20px;
  outline: none;
  letter-spacing: 0;
}
.create-link {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
