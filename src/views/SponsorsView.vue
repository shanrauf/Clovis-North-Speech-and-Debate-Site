<template>
  <div>
    <v-container class="sponsors">
      <h1>
        <strong>Sponsor Clovis North Forensics</strong>
      </h1>
      <p>The 2018-19 Clovis North Forensics team is working hard to win its third Valley Championship in a row. To help create team unity and stir excitement at school, we’re making a team T-shirt and we’re looking for sponsors! If your company would like its name/logo on the back of our team shirt, please consider sponsorship. If interested, please fill out the following sponsorship form and email a digital copy of your company name/logo. Thank you for helping support Clovis North Forensics!</p>
      <h2>
        <strong>FOR $250, A SPONSOR WILL RECEIVE</strong>
      </h2>
      <ul>
        <li>Name or Company Logo on the back of our Team Shirts</li>
        <li>Acknowledgement of the sponsorship sent out on Peach Jar to the Clovis North Community</li>
        <li>A mention on our team website clovisnorthforensics.org</li>
        <br />
      </ul>
      <p>For more information, please contact chadhayden@cusd.com</p>
      <p>
        <strong>Please send the company logo or artwork that you would like on the T-shirt and website to the above email address.</strong>
      </p>
      <p>
        Please make checks payable to
        <strong>BRONCO FOUNDATION</strong>
      </p>
      <ul style="text-decoration: none;">
        <li>Non-Profit 501(C) (3) -- TAX – ID # 71-1036638</li>
        <li>All proceeds benefit the members of the Clovis North Forensics Team</li>
      </ul>
    </v-container>
    <!-- Contact Us Form -->
    <v-container id="contact-us">
      <v-col cols="12" sm="6">
        <div class="contact-title">
          <h2>Sponsorship Form</h2>
          <p>Fill out the form below and we will get back to you as soon as possible</p>
        </div>

        <form name="contact" method="POST" netlify>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="firstName"
                label="Company Name"
                type="text"
                name="companyname"
                maxlength="50"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="email" label="E-mail" type="text" name="email" maxlength="50"></v-text-field>
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
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.sponsors {
  float: left;
  width: 50%;
}

#contact-us {
  display: inline-block;
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