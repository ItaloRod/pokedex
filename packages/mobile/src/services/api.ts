import Axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
