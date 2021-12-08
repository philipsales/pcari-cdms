<template>
  <div>
    <v-app-bar
      app
      style="margin-top: 48px; z-index: 2"
      clipped-left
      color="white"
      class="main-app-bar"
      dense
      flat
    >
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <v-toolbar-title>
        <router-link
          class="nav-link"
          :to="{name: 'HomePage'}" exact>
        <strong> Subheader Data Platform </strong>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h1>&nbsp;</h1>
    </v-app-bar>
  </div>
</template>

<script>
// import HelloWorld from './views/HomePage.vue';

export default {
  // name: 'AppHeader',
  name: 'SubHeaderApp',
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
          link: 'TerminologyService',
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
          link: 'TerminologyService',
        }, {
          title: 'Clinical Annotation',
          icon: 'mdi-pencil-box-multiple',
          link: 'ClinicalAnnotation',
        },
        {
          title: 'Cohort Builder',
          icon: 'mdi-account-multiple-check',
          link: 'CohortBuilder',
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
