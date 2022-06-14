<template>
  <div class="flex-container">
    <router-link to="/" class="back">back</router-link>
    <h1>Resume</h1>
    <p>edwinw@nycstudents.net</p>

    <div class="flex-container">
      <h2>Education</h2>
      <h3>Staten Island Technical High School, Staten Island, NY</h3>
      <h3>Cumulative Average: 99.43%, Expected Graduation Date: June 2024</h3>
    </div>

    <div class="flex-container">
      <h2>Relevant Coursework</h2>
      <ul>
        <li>CAD</li>
        <li>Computer Science</li>
      </ul>
    </div>

    <div class="flex-container">
      <h2>Awards and Honors</h2>
      <ul>
        <li>2nd Place in Solar Car TI-84 Plus CE Python Competition</li>
      </ul>
    </div>

    <div class="flex-container">
      <h2>Work/Volunteer Experience</h2>
      <h3>Botsitivity, Programmer, Staten Island, NY, 2021 - Present</h3>
      <ul>
        <li>Collaborated with team members to create elements of both the frontend and backend</li>
        <li>Created tools for the moderators of Botstivity such as an emailing system</li>
      </ul>
    </div>

    <div class="flex-container">
      <h2>Extracurricular Activities</h2>
      <h3>Chess Team, Member, Staten Island Technical High School, October 2021 - Present</h3>
      <ul>
        <li>Helped to coordinate and participated in a school-wide tournament</li>
        <li>Assisting fellow peers in the game of chess</li>
      </ul>
    </div>

    <div class="flex-container">
      <h2>Skills and Languages</h2>
      <ul>
        <li>AutoCAD Certified User</li>
        <li>Accessible HTML, CSS, JS</li>
        <li>Vue.js</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
ul {
  margin-left: 3rem
}
.back {
  align-self: flex-start
}
h1 {
  margin-bottom: 5rem
}
</style>