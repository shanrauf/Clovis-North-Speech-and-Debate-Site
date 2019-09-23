<template>
  <div class="contact-us">
    <v-container class="contact-us">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="contact-title">
            <h2>Contact Us</h2>
            <p>Send us your message and we will get back to you as soon as possible</p>
          </div>
          <form name="contact" method="POST" netlify>
            <div class="row">
              <div class="col-sm-6 form-group">
                <label for="name">First Name:</label>
                <input
                  id="firstname"
                  type="text"
                  class="form-control"
                  name="firstname"
                  maxlength="50"
                />
              </div>
              <div class="col-sm-6 form-group">
                <label for="name">Last Name:</label>
                <input
                  id="lastname"
                  type="text"
                  class="form-control"
                  name="lastname"
                  maxlength="50"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 form-group">
                <label for="email">Email:</label>
                <input id="email" type="text" class="form-control" name="email" maxlength="50" />
              </div>
              <div class="col-sm-6 form-group">
                <label for="phone">Phone:</label>
                <input id="phone" type="tel" class="form-control" name="phone" maxlength="50" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 form-group">
                <label for="name">Message:</label>
                <textarea
                  id="message"
                  class="form-control"
                  type="textarea"
                  name="message"
                  placeholder="Your Message Here"
                  maxlength="6000"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 form-group">
                <button type="submit" class="contact-us-submit">
                  <strong>Submit</strong>
                </button>
              </div>
            </div>
          </form>
          <div id="success_message" style="width:100%; height:100%; display:none; ">
            <h3>Sent your message successfully!</h3>
          </div>
          <div id="error_message" style="width:100%; height:100%; display:none; ">
            <h3>Error</h3>Sorry there was an error sending your form.
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#contact-us {
  margin: 0 auto;
  margin-top: 20px;
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