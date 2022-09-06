import axios from 'axios'
import { IBuild } from '../models/build.interface'

const apiClient = axios.create({
  baseURL: 'https://best-pc-af000-default-rtdb.firebaseio.com/',
  headers: {
    'Content-type': 'application/json'
  }
})

export const BuildService = {
  async getAll() {
    const { data } = await apiClient.get<IBuild[]>('/builds.json')
    return data
  }
}
