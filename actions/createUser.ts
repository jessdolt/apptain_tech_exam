import { User } from "@/app/interfaces"
import { API_TOKEN, APP_ID } from "@/lib"
import prismadb from "@/lib/prismadb"
import { generateNickName } from "@/utils/generateNickname"
import { generateId } from "@/utils/generateUuid"
import axios from "axios"

const createUser = async () => {
  try {
    const { data } = await axios.post(
      `https://api-${APP_ID}.sendbird.com/v3/users`,
      {
        user_id: generateId(),
        nickname: generateNickName(),
        issue_access_token: true,
        profile_url: "",
      },
      {
        headers: {
          "Api-token": API_TOKEN,
        },
      }
    )

    await prismadb.user.create({
      data: {
        user_id: data.user_id,
        nickname: data.nickname,
        profile_url: data.profile_url,
      },
    })

    return {
      accessToken: data.access_token,
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
