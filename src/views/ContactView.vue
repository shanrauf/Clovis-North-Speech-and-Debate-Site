<template>
  <v-container class="contact-us">
    <div class="contact-title">
      <h2>Contact Us</h2>
      <p>Send us your message and we will get back to you as soon as possible</p>
    </div>
    <form name="contact" method="POST" data-netlify="true">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="firstName"
            label="First Name"
            type="text"
            name="firstname"
            maxlength="50"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="lastName"
            label="Last Name"
            type="text"
            name="lastname"
            maxlength="50"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="email" label="E-mail" type="text" name="email" maxlength="50"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="phoneNumber"
            label="Phone #"
            type="tel"
            name="phone"
            maxlength="50"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-textarea
          v-model="message"
          filled
          auto-grow
          label="Message"
          type="textarea"
          name="message"
          placeholder="Your Message Here"
          maxlength="6000"
          rows="7"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <button type="submit" class="contact-us-submit">
            <strong>Submit</strong>
          </button>
        </v-col>
      </v-row>
    </form>
    <div id="success_message" style="width:100%; height:100%; display:none; ">
      <h3>Sent your message successfully!</h3>
    </div>
    <div id="error_message" style="width:100%; height:100%; display:none; ">
      <h3>Error</h3>Sorry there was an error sending your form.
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-us {
  width: 800px;
}
.contact-us-submit {
  background-color: lightblue;
  color: white;
  border-radius: 12px;
  font-size: 20px;
  padding: 12px 40%;
  transition-duration: 0.3s;
  cursor: pointer;
}
.contact-us-submit:hover {
  background-color: #85c1e9;
}
</style>