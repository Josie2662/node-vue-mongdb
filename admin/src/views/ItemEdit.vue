<template>
    <div>
        <!-- 通过是否带有id判断是编辑还是新增 -->
        <h1>{{id ? '编辑' : '新建'}}物品</h1>
        <el-form :model="form"  label-width="120px">
          <el-form-item label="名称">
              <el-input v-model="form.cateName"></el-input>
          </el-form-item>
          <el-form-item label="图标">
              <el-input v-model="form.icon"></el-input>
          </el-form-item>
          <el-form-item label="">
              <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
          
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form: {
                cateName:'',
                icon:''
            },
            id: this.$route.params.id
        }
    },
    methods: {
        async onSubmit(){
            let res
            // 判断是新建分类还是编辑分类
            if (this.id) {
                // 请求接口 提交数据
                res = await this.$_http.put(`rest/items/${this.id}`, this.form)
            } else {
                // 请求接口 提交数据
                res = await this.$_http.post('rest/items', this.form)
                
            }
            // 调转到分类列表页面
            this.$router.push('/items/list')
            // 使用elementUI的message组件提示保存成功
            this.$message({
                type: 'success',
                message: '提交成功!'
            })
            console.log(res);
        },
        // 获取“编辑分类”时的该条数据信息
        async fetch() {
            const res = await this.$_http.get(`rest/items/${this.id}`)
            this.form.cateName = res.data.cateName
            this.form.icon = res.data.icon
            console.log(res.data);
        }
    },
    created() {
        // 当有this.id时才执行this.fetch()
        this.id && this.fetch()
    }

}
</script>

<style>

</style>