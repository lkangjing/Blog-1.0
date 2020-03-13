<template>
  <b-container>
    <b-jumbotron class="aboutcard">
      <template v-slot:header>刘康靖的个人网站</template>
      <template v-slot:lead>
        初出茅的庐代码匠
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutcard{
    margin-top: 120px;
}
</style>