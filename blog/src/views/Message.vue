<template>
  <b-container class="message">
    <b-row>
      <b-col md="9">
        <h1>留言板</h1>
        <b-input-group size="sm" prepend="昵称:">
          <b-form-input placeholder="仅需输入昵称即可留言" v-model="touristName"></b-form-input>
        </b-input-group>
        <b-form-textarea id="textarea" v-model="text" placeholder="输入留言..." rows="3" max-rows="6"></b-form-textarea>
        <b-button class="mt-2" v-b-modal.modal-lg @click="addMsg">发布</b-button>
        <b-modal v-if="!text&&!touristName" ok-only id="modal-lg" size="lg" title="提示:">用户名或内容不能为空</b-modal>
        <h4>留言列表</h4>
        <b-list-group class="mt-3">
          <b-list-group-item
            v-for="(message,i) in messages"
            :key="i"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{message.name}}:</h5>
              <small>{{message.createdAt | timeFormat}}</small>
            </div>
            <p class="mb-1">{{message.content}}</p>
            <!-- <small>回复</small> -->
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      touristName: "",
      text: "",
      messages: []
    };
  },
  methods: {
    async addMsg() {
      console.log('addmsg');
      
      if (this.text && this.touristName) {
        await this.axios.post("/addLeaveMessage", {
          name: this.touristName,
          content: this.text,
          email: "123"
        });
        this.text=""
        this.touristName=""
        this.getMsg()
      }
    },
    async getMsg() {
      const res = await this.axios.get("/listLeaveMessage");
      this.messages = res.data;
      console.log("留言板信息:", this.messages);
    }
  },
  created() {
    this.getMsg();
  }
};
</script>

<style scoped>
.message {
  margin-left: 16.6%;
  margin-top: 70px;
}
h1 {
  font-weight: bold;
}
h4 {
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  .message {
    margin-left: 0;
  }
}
</style>