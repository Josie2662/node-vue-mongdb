<template>
    <div>
        <h1>新建分类</h1>
        <el-form :model="form"  label-width="120px">
          <el-form-item label="分类名称">
              <el-input v-model="form.cateName"></el-input>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                cateName:''
            }
        }
    },
    methods: {
        async onSubmit(){
            // 请求接口 提交数据
            const res = await this.$_http.post('catrgories', this.form)
            // 调转到分类列表页面
            this.$router.push('/categories/list')
            // 使用elementUI的message组件提示保存成功
            this.$message({
                type: 'success',
                message: '提交成功!'
            })
            console.log(res);

        }
    }

}
</script>

<style>

</style>