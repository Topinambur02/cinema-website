import axios from 'axios'

const $host = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:8000/api/',
})

export default $host
