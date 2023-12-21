import { User } from "@/app/interfaces"
import prismadb from "@/lib/prismadb"
import { generateNickName } from "@/utils/generateNickname"
import { generateId } from "@/utils/generateUuid"
import { api } from "./lib/axios"
import Cookies from "js-cookie"

const createUser = async () => {
  try {
    const { data } = await api.post(`/users`, {
      user_id: generateId(),
      nickname: generateNickName(),
      issue_access_token: true,
      profile_url: "",
    })

    const { data: token } = await api.post(`/users/${data.user_id}/token`, {})

    await prismadb.user.create({
      data: {
        user_id: data.user_id,
        nickname: data.nickname,
        profile_url: data.profile_url,
      },
    })

    return {
      accessToken: token.token,
      userId: data.user_id,
      nickname: data.nickname,
      profileUrl: data.profile_url,
    } as User
  } catch (e) {
    console.log(e)

    return null
  }
}

export default createUser
