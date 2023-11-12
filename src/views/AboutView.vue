<template>
  <div class="about">
    <div id="about-general-info" class="about-item">
      <h1 class="paragraph-title">About me</h1>
      <p class="paragraph-content">
        I'm passionate about developing software from every angle, covering both the backend and frontend, as well as
        development and analysis. I'm always eager to learn and research new technologies to stay up-to-date with the
        latest trends.
        In addition to my professional interests, I'm also a gamer at heart and enjoy creating mini games for fun in my
        spare time. I believe that the best developers are always curious and willing to explore new ideas and
        approaches,
        and I strive to embody this philosophy in my work.
      </p>
    </div>

    <div id="experiences" class="about-item">
      <h1 class="paragraph-title">Experiences</h1>
      <div>
        <Steps :steps="experiences"></Steps>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Steps from "@/components/Steps/Steps.vue";

const experiences = [
  {
    title: "2015-2018 | Add Value",
    subtitle: "Full Stack Engineer",
    description: "Product analysis and development in a FinTech context. Development and analysis of company products with web and batch elements for financial context. Technical leadership of the front-end development.",
    tags: ["Java", "Spring Framework", "Javascript", "Bootstrap", "Typescript", "Angular", "Postgresql", "Elasticsearch", "AWS cloud"],
  },
  {
    title: "2019 | Nivaura",
    subtitle: "Senior Full Stack Engineer",
    description: "Product analysis and development in a FinTech context. Analysis and development of microservices architectures and environment infrastructures.",
    tags: ["Java", "Spring Framework", "VueJs", "NestJs", "Typescript", "Node", "Postgresql", "Maria DB", "ELK stack", "AWS cloud"],
  },
  {
    title: "2020-2023 | Tui Musement",
    subtitle: "Senior Software Engineer",
    description: "Analysis and development of products oriented to the tourism business.",
    tags: ["Java", "Spring Framework", "C#", ".NET", "Typescript", "Node", "Vue", "Nuxt", "Datadog", "Contentful", "AWS cloud", "Terraform"],
  }
]
</script>

<style scoped lang="scss">
.about {
  display: block;
  max-width: 90%;
  margin: auto;
  align-items: center;

  .about-item {
    margin-bottom: 2em;
  }
}

.paragraph-title {
  border-bottom: 1px solid hsla(160, 100%, 37%, 1);
}

.paragraph-content {
  margin-top: 0.5em;
}
</style>
