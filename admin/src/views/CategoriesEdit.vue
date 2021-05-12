<template>
    <div>
        <!-- 通过是否带有id判断是编辑还是新增 -->
        <h1>{{id ? '编辑' : '新建'}}分类</h1>
        <el-form :model="form"  label-width="120px">
          <el-form-item label="上级分类">
              <!-- 添加一个上级分类选择框 -->
                <el-select v-model="form.parent" placeholder="请选择">
                    <el-option
                        v-for="item in form.parents"
                        :key="item._id"
                        :label="item.cateName"
                        :value="item._id">
                    </el-option>
                </el-select>
          </el-form-item>
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
                cateName:'',
                parents: []
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
                res = await this.$_http.put(`catergories/${this.id}`, this.form)
            } else {
                // 请求接口 提交数据
                res = await this.$_http.post('catergories', this.form)
                
            }
            // 调转到分类列表页面
            this.$router.push('/categories/list')
            // 使用elementUI的message组件提示保存成功
            this.$message({
                type: 'success',
                message: '提交成功!'
            })
            console.log(res);
        },
        // 获取“编辑分类”时的该条数据信息
        async fetch() {
            const res = await this.$_http.get(`catergories/${this.id}`)
            this.form.cateName = res.data.cateName
            console.log(res.data);
        },
        // 获取父级分类选项
        async parentFetch() {
            const res = await this.$_http.get('catergories')
            this.form.parents = res.data
            console.log(res.data);
        }
    },
    created() {
        this.parentFetch()
        // 当有this.id时才执行this.fetch()
        this.id && this.fetch()
    }

}
</script>

<style>

</style>