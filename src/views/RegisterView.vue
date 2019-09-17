<template>
  <v-layout justify-center class="register-container">
    <v-flex xs12 sm6>
      <v-card class="signup-form">
        <div class="text-center signup-title">Sign Up</div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-btn class="google-button" rounded color="#df4930" @click="googleAuth">
            <v-icon color="white" left>$vuetify.icons.google</v-icon>
            <b class="white-text">Login with Google</b>
          </v-btn>
          <div class="or-seperator">
            <i>or</i>
          </div>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirm password"
            type="password"
            required
          ></v-text-field>

          <v-btn raised :disabled="!valid" color="#48ab80" class="mr-4" @click="validate">
            <span class="white-text">Register</span>
          </v-btn>
        </v-form>
      </v-card>
      <br />
      <p class="text-center">
        Already have an account?
        <router-link to="/login">Login Here!</router-link>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      confirmPassword: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v.length > 8 && v.length < 40) ||
          "Passwords must be 8-40 characters long"
      ],
      confirmPasswordRules: [
        v => !!v || "This field is required",
        v => v == this.password || "Passwords must match"
      ],
      select: null,
      checkbox: false
    };
  },
  methods: {
    ...mapActions(["googleAuth"]),
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch({
          type: "createAccount",
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style>
.register-container {
  margin: 30px;
}
.google-button {
  margin: 0 auto;
  display: block;
}
.or-seperator {
  margin: 30px 0 0;
  text-align: center;
  border-top: 2px solid #ccc;
}
.or-seperator i {
  padding: 5px 7px;
  background: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 20px;
  position: relative;
  top: -11px;
  z-index: 1;
}
.signup-form {
  padding: 20px;
}
.signup-title {
  font-size: 25px;
  font-weight: bold;
}
.white-text {
  color: #f4f4f4;
}
.v-application a {
  color: #48ab80;
}
</style>

