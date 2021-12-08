<template>
 <v-app-bar
      class="subheader-app-bar"
      style="margin-top: 49px; z-index: 2"
      app
      color="white"
      dense
      flat
    >
    <v-toolbar-title class="create-title" >
      <h5>
        {{contents.pageTitle}}
      </h5>
    </v-toolbar-title>
    <div v-for="(content, index) in contents.commands" :key="index" >
        <v-btn text color="primary" class="create-button">
          <router-link
            class="create-link"
            :to="{name: content.link}"
          >
          <h4>
          <v-icon>{{content.icon}}</v-icon>
          {{content.buttonName}}
          </h4>
          </router-link>
        </v-btn>
    </div>
 </v-app-bar>
</template>

<script>
export default {
  name: 'LandingCreate',
  props: {
    contents: {
      pageTitle: String,
      commands: [{
        name: String,
        link: String,
        buttonName: String,
      }],
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.subheader-app-bar {
  padding-left: 80px;
  border-bottom: 1px  solid #E0E0E0 !important;;
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
.create-title {
  padding-right: 30px;
}
</style>
