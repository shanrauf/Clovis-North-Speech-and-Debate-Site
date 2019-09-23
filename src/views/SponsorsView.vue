<template>
  <div>
    <div id="sponsors" class="container-fluid">
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
    </div>
    <!-- Contact Us Form -->
    <div>
      <div id="contact-us" class="container-fluid">
        <div class="col-md-6 col-md-offset-3">
          <div class="contact-title">
            <h2>Sponsorship Form</h2>
            <p>Fill out the form below and we will get back to you as soon as possible</p>
          </div>

          <form name="sponsorship" method="POST" netlify>
            <div class="col-sm-6 form-group">
              <label for="companyName">Company Name:</label>
              <input id="email" type="text" class="form-control" name="Company Name" maxlength="50" />
            </div>
            <div class="col-sm-6 form-group">
              <label for="email">E-mail:</label>
              <input
                id="phone"
                type="tel"
                class="form-control"
                name="email"
                required
                maxlength="50"
              />
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#sponsors {
  display: inline-block;
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