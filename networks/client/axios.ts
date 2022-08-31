import { AxiosInstance } from './../../node_modules/axios/index.d';
import axios from "axios"

export function backendApi(): AxiosInstance {
  const ax = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_KAENOVA_BACKEND_ENDPOINT}`
  })
  return ax
}