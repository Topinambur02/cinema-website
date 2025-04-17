import axios from 'axios'

const $host = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:8000/api/',
})

$host.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default $host
