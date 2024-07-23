
import axios from "@/node_modules/axios/index"

const instance = axios.create({
    baseURL: '', 
})

export default instance