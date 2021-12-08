<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="#6E0D1C"
      class="main-app-bar"
      dark
      dense
    >
    &nbsp;
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          class="nav-link"
          :to="{name: 'HomePage'}" exact>
        <strong> Biobank Data Management Platform</strong>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-menu
          bottom
          rounded
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              x-large
              v-on="on"
            >
              <v-avatar
                color="primary"
                size="35"
              >
              <v-icon>mdi-account-circle-outline</v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-card max-width="270px" style="padding: 0px 0px;">
        <v-list-item two-line>
          <v-list-item-avatar>
            <!-- <img src="https://randomuser.me/api/portraits/women/81.jpg"> -->
            <v-icon large>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.fullName}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in accountMenus"
          :key="item.title"
          :to="{name: item.link}"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
          </v-card>
        </v-menu>
      <h1>&nbsp;</h1>
    </v-app-bar>
    <v-overlay :value="drawer" z-index="4"> </v-overlay>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        class="main-drawer"
        :style="{ top: $vuetify.application.top + 'px', zIndex: 4, width: 293 }"
        height="140%"
        color="#F8EEE7"
        >
      <v-list >
        <v-list-item
          class="app-list-item"
          v-for="item in items"
          :key="item.title"
          @click.stop="drawer = !drawer"
          :to="{name: item.link}"
          exact
          link
        >
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import HelloWorld from './views/HomePage.vue';

export default {
  name: 'HeaderApp',
  // components: {
  // HelloWorld,
  // },
  method: {
    foo() {
      console.log('foo');
    },
  },
  data() {
    return {
      drawer: false,
      user: {
        fullName: 'Jose Philip Ramize',
        email: 'pjsales@ittc.up.edu.ph',
      },
      accountMenus: [
        {
          title: 'Edit Account',
          icon: 'mdi-shield-account-outline',
          link: 'UserAccount',
        },
        {
          title: 'Sign out',
          icon: 'mdi-logout-variant',
          link: 'ClinicalAnnotation',
        },
      ],
      items: [
        {
          title: 'Terminology Server',
          icon: 'mdi-database',
          link: 'VocabularyList',
        }, {
          title: 'Clinical Annotation',
          icon: 'mdi-pencil-box-multiple',
          link: 'ProjectList',
        },
        {
          title: 'Cohort Builder',
          icon: 'mdi-account-multiple-check',
          link: 'SubsetList',
        },
        {
          title: 'Home',
          icon: 'mdi-home-outline',
          link: 'UserList',
        },
        {
          title: 'Biobank Registry',
          icon: 'mdi-flask-outline',
          link: 'BiobankCaseList',
        },
        {
          title: 'Medical Registry',
          icon: 'mdi-heart-pulse',
          link: 'MedicalCaseList',
        },
        {
          title: 'Access Management',
          icon: 'mdi-shield-account',
          link: 'UserList',
        },
      ],
      mini: true,
    };
  },
};
</script>
<style>

</style>

<style scoped>
.main-app-bar {
  height: 648px;
  background-color: #6E0D1C;
}
.home-sidebar {
  /* display: flex ; */
  overflow:hidden;
  background: aqua;
  margin-left: -80px;
}
.app-list-item {
  padding: 0 21px;
  height: 20px;
}
.main-drawer {
  width: 293px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
