<template>
  <!-- <b-row class="container"> -->
  <b-col class="container" md="9">
      <div class="title">
        <h1>{{blog.title}}</h1>
      </div>
      <div class="details" v-html="blog.body">
        <!-- {{blog.body}} -->
      </div>
      <div>
        <span>日期:</span>
        {{blog.createdAt | timeFormat}}
      </div>
      <div class="addmessage pb-5">
        <div class="title mt-3 mb-2">添加评论:</div>
        <b-form-input v-model="text" placeholder="输入评论..."></b-form-input>
        <button class="mt-2" @click="leaveMsg">发布</button>
        <div class="list">
          <b-list-group class="mt-3">
            <b-list-group-item v-for="(item,i) in blog.commentList" :key="i" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <div class="mb-1 massagename">{{item.name}}:</div>
                <small>{{item.createdAt | timeFormat}}</small>
              </div>
              <p
                class="mb-1 massageinfo"
                v-html="item.content"
              ></p>
              <!-- <small><a href="#">回复</a></small> -->
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
  </b-col>
  <!-- </b-row> -->
</template>

<script>
// import Message from './Message'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      text: "",
      blog: {},
    };
  },
  methods: {
    async leaveMsg(){
      const res = await this.axios.post('/addComment',{
        name: dayjs(new Date()).format('YYYY-MM-DD-HH:mm:ss'),
        content:this.text,
        blogId:this.blog._id
        })
      // console.log('添加评论后:',res.data);
      this.text=""
      this.getBlog()
    },
    async getBlog() {
      const res = await this.axios.get(`/getBlogById/${this.$route.params.id}`);
      this.blog = res.data;
      console.log('单条博客:',this.blog);
      
    }
  },
  created() {
    this.getBlog()
  },
};
</script>

<style scoped>
.container {
  margin-left: 16.6%;
}

.details{
  margin: 15px 0;
  font-size: 23px;
  text-indent: 2rem;
}
.massagename{
  font-size: 18px;
}
.massageinfo{
  /* background: rgb(130, 132, 134); */
}
@media screen and (max-width: 768px) {
  .container {
    margin-left: 0;
    margin-top: 50px;
  }
}
</style>