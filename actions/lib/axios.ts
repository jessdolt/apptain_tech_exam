import { API_TOKEN, APP_ID } from "@/lib"
import axios from "axios"

export const api = axios.create({
  baseURL: `https://api-${APP_ID}.sendbird.com/v3/`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Api-Token": API_TOKEN,
  },
})
