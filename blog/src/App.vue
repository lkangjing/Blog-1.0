<template>
  <div id="app">
    <b-container fluid>
      <b-navbar toggleable="sm" fixed="top" class="navbar" type="dark" variant="dark">
        <!-- <div class="logo">刘康靖</div> -->
        <b-navbar-brand href="#" class="ml-4 mr-5">刘康靖</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">主页</b-nav-item>
            <b-nav-item to="/home">博客</b-nav-item>
            <!-- <b-nav-item href="#">项目</b-nav-item> -->
            <b-nav-item to="/message">留言板</b-nav-item>
            <b-nav-item to="/about">关于</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Github</b-nav-item>
            <b-nav-item href="#">微博</b-nav-item>
            <b-nav-item href="#">微信</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<style scoped>
.container-fluid {
  padding: 0;
}
</style>
