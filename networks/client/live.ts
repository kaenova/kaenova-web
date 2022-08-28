import { ChatData } from "../../types/live";
import { backendApi } from "./axios";

export type messageData = {
  message: string
  created_at: string
  user: userData
}

export type userData = {
  id: string,
  name: string
}

export async function getAllLiveChat(): Promise<ChatData[]> {

  let res = await backendApi().get("/livechat/chat")
  let data = res.data as messageData[]

  // Resolve to ChatData
  var finalData: ChatData[] = [];
  data.map((v) => {
    finalData.push({
      message: v.message,
      senderName: v.user.name,
      createdAt: new Date(v.created_at)
    })
  })


  return finalData
}

export async function authenticateLiveUser(name: string, token: string): Promise<string> {
  let res = await backendApi().post("/livechat/register", {
    name: name,
    hcaptcha: token
  })
  let data = res.data as string
  return data
}