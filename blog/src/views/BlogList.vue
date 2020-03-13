<template>
  <b-col md="9" class="main">
    <div class="content">
      <b-card class="mb-1" :title="blog.title" v-for="(blog,i) in blogs" :key="i">
        <b-card-text class="bloginfo" v-html="blog.description"></b-card-text>
        <span class="mr-5">发布日期:{{blog.createdAt | timeFormat}}</span>
        <b-badge
          href="#"
          class="mr-2"
          variant="secondary"
          v-for="(item,i) in blog.labels"
          :key="i"
        >{{item.label}}</b-badge>
        <b-link class="card-link ml-5" :to="`/singleblog/${blog._id}`">查看详情</b-link>
      </b-card>
    </div>
  </b-col>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    id: { type: String }
  },
  data() {
    return {
      blogs: []
    };
  },

  methods: {
    //获取不同标签的博客@click="getLabelBlog"
    async getLabelBlog() {
      if (this.id) {
        let res = await this.axios.get(`/listBlog/${this.id}`);
        this.blogs = res.data[0].blogList;
        console.log("id-blogs:", this.blogs);
      } else {
        let res = await this.axios.get("/listBlog");
        this.blogs = res.data;
        // console.log('直接获取所有blogs:',this.blogs);
      }
    }
  },
  created() {
    this.getLabelBlog();
  }
};
</script>

<style scoped>
.bloginfo {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>