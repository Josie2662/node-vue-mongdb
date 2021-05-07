import axios from 'axios'

const _http = axios.create({
    // 后台接口地址
    baseURL:'http://localhost:3000/admin/api'
})

export default _http