import axios from 'axios'

const $host = axios.create({
  withCredentials: true,
  baseURL: '/api/',
})

$host.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default $host
