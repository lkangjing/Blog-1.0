<template>
  <div>
    <el-table :data="listLabel">
      <el-table-column prop="_id" label="_id" width="240"></el-table-column>
      <el-table-column prop="label" label="名称" width="220"></el-table-column>
      <el-table-column label="操作" width="420">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="$router.push(`/editBlogLabel/${scope.row._id}`)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delLabelById(scope.row._id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLabel: []
    };
  },
  created() {
    this.fetchlistLabelAll();
  },
  methods: {
    async fetchlistLabelAll() {
      const result = await this.$http.get("/listLabel");
      this.listLabel = result.data;
    },
    async delLabelById(id) {
      this.$confirm("此操作将永久删除该标签, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/delLabelById/" + id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetchlistLabel();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style>
</style>
