<template>
  <div>
      <h1>分类列表</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="_id" label="ID" width="220">
        </el-table-column>
        <el-table-column prop="parent.cateName" label="父级分类" >
        </el-table-column>
        <el-table-column prop="cateName" label="分类名称" >
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope" width="100">
                <!-- 点击编辑之后跳转页面，同时携带id参数 -->
                <el-button @click="$router.push(`/categories/edit/${scope.row._id}`)" type="primary" size="small">编辑</el-button>
                <el-button type="danger" size="small" @click="deleteSub(scope.row)">删除</el-button>
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
        },
        // 根据父级分类ID获取父级分类名称
        // async parentFech(id) {
        //     const res = await this.$_http.get(`catergories/${}`,)
        // },
        // 点击删除按钮
        deleteSub(row) {
            this.$confirm(`此操作将删除分类${row.cateName}, 是否继续?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                // 发送删除请求
                const res =  await this.$_http.delete(`catergories/${row._id}`)
                this.fecth()
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                console.log(res);
            })
        }
    },
    created() {
        this.fecth()
    }

}
</script>

<style>

</style>