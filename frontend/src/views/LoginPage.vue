<template>
  <v-layout fill-height fluid no-gutters class="login-page">
      <v-row
        align="center"
        justify="center"
      >
      <v-card flat
        no-gutters
        style="min-width: 775px; min-height: 420px;"
        class="login-card
        rounded-0
        col-md-7
        col-xl-5"
      >
        <v-row >
          <v-col cols="8" style="background-color: re; " >
            <v-row
              align="center"
              justify="center"
              style="background-color: pxink; margin-top: 115px">
              <form>
                <v-text-field
                  v-model="email"
                  style="width: 280px; margin-left: -5px"
                  :rules="[rules.emailRequired]"
                  :type="show3 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Email Address"
                  counter
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  style="width: 280px; margin-left: -5px"
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.passRequired]"
                  :type="show3 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  counter
                  @click:append="show3 = !show3"
                  outlined
                  dense
                ></v-text-field>
                <v-row>
                  <v-spacer></v-spacer>
                  <v-text
                    flat
                    clipped-right
                    align="right"
                    dense
                    class="mr-4 text-center">
                    Forgot password
                  </v-text>
                </v-row>
                <br>
                 <v-btn
                  flat
                  dense
                  style="width: 280px; margin-left: -5px"
                  :to="{name: 'HomePage'}"
                  class="mr-4 primary">
                  Sign in
                </v-btn>
              </form>
            </v-row>
          </v-col>
          <v-col no-gutters cols="4" style="background-color: green" >
          </v-col>
        </v-row>
      </v-card>
      </v-row>
  </v-layout>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      show3: false,
      password: '',
      email: '',
      rules: {
        passRequired: (value) => !!value || 'Password is required.',
        emailRequired: (value) => !!value || 'Email is required.',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
};
</script>
<style scoped>
.login-page {
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px; */
  overflow: hidden auto;
  background-color: rgb(87, 177, 142);
  background-image: url("../assets/login.svg");
  background-attachment: fixed;
  background-size: cover;
}
.login-card {
}
</style>
