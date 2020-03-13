<template>
    <b-row class="brow">
      <b-col md="2" class="sidebar">
        <b-list-group class="sidebar-list">
          <b-list-group-item href="#" to="/home"  variant="light" class="aa " @click="flag=-1" :class="{active:flag===-1}">博客</b-list-group-item>
          <b-list-group-item @click="flag=item._id" :class="{active:flag===item._id}" v-for="(item,i) in label" :to="`/home/bloglist/${item._id}`" :key="i"  variant="light">{{item.label}}</b-list-group-item>
        </b-list-group> 
      </b-col>
      <router-view :key="$route.path"></router-view>
    </b-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      label:[],
      blogs:[],
      flag:-1
    }
  },
  components: {
    
  },
  methods: {
    //获取标签
    async getLabel(){
      const res = await this.axios.get('/listLabel')
      this.label = res.data
      // console.log('label:',this.label);
    },
    
  },
  created() {
    this.getLabel()
  },
};
</script>
<style scoped>
.main {
  margin-left: 16.6%;
}

.list-group-item {
  border: 0;
  background: #e6e6e7;
}
.list-group-item.active {
  background: rgb(130, 132, 134);
}
.brow {
  /* margin: 15px 0; */
  margin: 70px 0 0;
}
#nav-collapse {
  white-space: nowrap;
}
.sidebar {
  position: fixed;
  font-size: 20px;
  text-align: center;
  color: white;
  /* margin-left: 10px; */
}

/* .navbar {
  display: flex;
  justify-content: space-between;
} */

.aa {
  white-space: nowrap;
}
.content .title {
  font-size: 25px;
  font-weight: bold;
}

.content .body {
  font-size: 18px;
  padding-top: 10px;
  text-indent: 2em;
}

.content-item {
  margin-bottom: 20px;
  /* border: 1px solid #ededed; */
  padding: 15px;
  background: #e6e6e7;
}

.item-info {
  margin-top: 20px;
  font-size: 15px;
  color: rgb(129, 132, 133);
}

@media screen and (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 2;
    margin-top: -15px;
    padding: 0;
  }
  .sidebar-list {
    /* width: 100%; */
    flex-direction: row;
    overflow: auto;
  }
  /* .content{
    margin-left: 20px;
  } */
  .main {
    margin-left: 0;
    margin-top: 50px;
  }
  .element::-webkit-scrollbar {
    width: 0 !important;
  }
}
</style>