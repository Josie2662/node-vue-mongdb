<template>
  <div>
      <h1>分类列表</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column prop="cateName" label="分类名称" >
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope" width="100">
                <!-- 点击编辑之后跳转页面，同时携带id参数 -->
                <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </template>
        </el-table-column>
        
      </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: []
        }
    },
    methods: {
        async fecth() {
            // 从服务端接口获取数据
         const res =  await this.$_http.get('catergories')
         this.tableData = res.data
         console.log(this.tableData);
        }
    },
    created() {
        this.fecth()
    }

}
</script>

<style>

</style>