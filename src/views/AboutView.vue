<template>
  <v-container class="about-view-container" fluid>
    <div class="about-container">
      <v-card
        elevation="10"
        raised="true"
        max-width="600px"
        max-height="400px"
        color="#F9F9F9"
        class="mx-auto"
      >
        <div class="about-summary">
          <h1 class="display-2 font-weight-thin">About Us</h1>
          <p
            class="subheading"
          >Clovis North Forensics is a high school speech & debate team at Clovis North High School in Fresno, California. Every Tuesday and Thursday, students prepare for upcoming tournaments through student lectures, debates, etc. Our team and its students have won numerous awards at the local, state, and national level.</p>
        </div>
      </v-card>
    </div>

    <br />

    <div class="about-container">
      <h1 class="display-2 font-weight-thin" align="center">Speech Events:</h1>

      <br />

      <v-row justify="center">
        <v-card
          v-for="event in speechEvents"
          :key="event.name"
          elevation="10"
          raised="true"
          max-width="600px"
          max-height="400px"
          color="#F9F9F9"
          class="mx-auto"
        >
          <div class="about-summary">
            <h1 class="display-2 font-weight-thin">{{event.name}}</h1>
            <p class="subheading">{{event.description}}</p>
          </div>
        </v-card>
      </v-row>
    </div>

    <br />

    <div class="about-container">
      <h1 class="display-2 font-weight-thin" align="center">Debate Events:</h1>

      <br />

      <v-row justify="center">
        <v-card
          v-for="event in debateEvents"
          :key="event.name"
          elevation="10"
          raised="true"
          max-width="600px"
          max-height="400px"
          color="#F9F9F9"
          class="mx-auto"
        >
          <div class="about-summary">
            <h1 class="display-2 font-weight-thin">{{event.name}}</h1>
            <p class="subheading">{{event.description}}</p>
          </div>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      speechEvents: [
        {
          name: "Dramatic Interpretation",
          description:
            "Using a play, short story, or other published work, students perform a selection of one or more portions of a piece up to ten minutes in length. With a spotlight on character development and depth, this event focuses on the student’s ability to convey emotion through the use of a dramatic text. Competitors may portray one or multiple characters. No props or costumes may be used. Performances can also include an introduction written by the student to contextualize the performance, and state the title and the author.",
          "extended-description":
            "Dramatic Interpretation, contrary to its name, is not all about drama. While dramatic elements are key aspects of the event, melodramatic, or overly-sad selections are not ideal choices for performance. DI lacks props, costuming, sets, and other luxuries seen in various forms of performance art. There is a set time limit of ten minutes, with a thirty second grace period. Students who choose to compete in Dramatic Interpretation should focus on portraying a realistic, emotional journey of the character(s) in their selection. The performance should connect to the audience.\n\nStudents who do Dramatic Interpretation may perform selections on topics of serious social subject matter such as coping with terminal illness; significant historical situations, events, and figures; as well as racial and gender discrimination, suppression, and oppression. Students should select pieces that are appropriate for them. Considerations for selecting a DI topic should include the student’s age, maturity, and school standards.",
          video: "https://player.vimeo.com/video/230061902"
        },
        {
          name: "Duo Interpretation",
          description:
            "Two competitors team up to deliver a ten-minute performance of a published play or story. Using off-stage focus, competitors convey emotion and environment through a variety of performance techniques focusing on the relationships and interactions between the characters. No props or costumes are used. Performances can also include an introduction written by the students to contextualize the performance and state the title and the author.",
          "extended-description":
            "Duo. The event everyone wants to do with a best friend. In truth, while the appeal of duo might be performing with a friend, this approach may not be best. Duo is about balance. Partners need to compliment one another stylistically, have a similar skill set and work ethic. Chemistry is an important element of duo, but chemistry outside of a practice/performance setting does not always translate to chemistry when practicing or performing at a tournament. Be sure to share your goals with your coach as they help you through the process of getting started in duo.\n\nDuo is an event that can be dramatic, comedic, or a combination of the two. With a ten minute time cap, and a requirement of an off-stage focus, Duo is one of the most unique forms of performance. The main objective is to maintain a sense of balance between performers that focuses on the relationship(s) between the characters they create.",
          video: "https://player.vimeo.com/video/230062886"
        }
      ],
      debateEvents: [
        {
          name: "Policy Debate",
          description:
            "A two-on-two debate that focuses on a policy question for the duration of the academic year, this format tests a student’s research, analytical, and delivery skills. Policy debate involves the proposal of a plan by the affirmative team to enact a policy, while the negative team offers reasons to reject that proposal. Throughout the debate, students have the opportunity to cross-examine one another. A judge or panel of judges determines the winner based on the arguments presented.",
          "extended-description":
            "Policy debate is a two-on-two debate where an affirmative team proposes a plan and the negative team argues why that plan should not be adopted. The topic for policy debate changes annually, so debaters throughout the course of the year will debate the same topic.\n\nOne member of each team will perform the ‘first’ speeches, the other the ‘second’ speeches. So the person who reads the 1AC wil also perform the 1AR, for example. Note that the debate begins with the affirmative speaking first, and then switches midway through the debate where the negative speaks first, thus giving the affirmative the ability to speak last.",
          video: "https://player.vimeo.com/video/230051366"
        },
        {
          name: "Lincoln-Douglas Debate",
          description:
            "In this one-on-one format, students debate a topic provided by the National Speech & Debate Association. Topics range from individual freedom versus the collective good to economic development versus environmental protection. Students may consult evidence gathered prior to the debate but may not use the Internet in round. An entire debate is roughly 45 minutes and consists of constructive speeches, rebuttals, and cross-examination.",
          "extended-description":
            "Lincoln-Douglas Debate typically appeals to individuals who like to debate, but prefer a one-on-one format as opposed to a team or group setting. Additionally, individuals who enjoy LD like exploring questions of how society ought to be. Many people refer to LD Debate as a “values” debate, as questions of morality and justice are commonly examined. Students prepare cases and then engage in an exchange of cross-examinations and rebuttals in an attempt to convince a judge that s/he is the better debater in the round.",
          video: "https://player.vimeo.com/video/230052132"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about-view-container {
  background-color: lightblue;
}
.about-container {
  margin: 20px;
}
.about-summary {
  margin: 0 auto;
  padding: 5em 3em;
  text-align: center;
}
.about-summary h1 {
  margin-bottom: 10px;
}
</style>