<template>
  <div class="bg">
    <!-- <img src="../assets/img/微信图片_20190617163650.jpg" alt /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* img {
  width: 100vw;
} */
.bg{
      height: 100vh;
      background: url('../assets/img/微信图片_20190617163650.jpg') no-repeat;
      background-size: 100%;
    }
@media screen and (max-width: 768px) {
    .bg{
      background-image: url('../assets/img/feiji.jpg');
      background-size: 100% calc(100vh - 56px);
      background-position: bottom;
    }
}
</style>