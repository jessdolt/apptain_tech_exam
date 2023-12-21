"use client"
import { useState } from "react"
import axios from "axios"

import { ChannelList } from "@sendbird/uikit-react"
import CreateChannel from "@sendbird/uikit-react/CreateChannel"
import EditUserProfile from "@sendbird/uikit-react/EditUserProfile"
import SbHeader from "./sb-header"

const SbChannel = () => {
  const [openChannel, setOpenChannel] = useState(false)
  const [openUserProfile, setOpenUserProfile] = useState(false)

  const handleOnChannelCreate = async (channel: any) => {
    const { creator, url, members } = channel
    const { userId } = creator

    const data = {
      created_by: userId,
      url,
      chatmate:
        members.length === 2
          ? members.filter((member: any) => member.userId !== userId)[0].userId
          : null,
    }

    try {
      await axios.post("/api/channel", data)
    } catch (e) {
      console.log(e)
    }
  }
  const handleOnEditProfile = async (user: any) => {
    const { userId, plainProfileUrl, nickname } = user

    try {
      await axios.put("/api/user", {
        user_id: userId,
        profile_url: plainProfileUrl,
        nickname,
      })

      setOpenUserProfile(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {openChannel && (
        <CreateChannel
          onCreateChannel={handleOnChannelCreate}
          onCancel={() => setOpenChannel(false)}
        />
      )}

      {openUserProfile && (
        <EditUserProfile
          onCancel={() => setOpenUserProfile(false)}
          onEditProfile={handleOnEditProfile}
        />
      )}

      <ChannelList
        renderHeader={() => {
          return (
            <SbHeader
              setOpenChannel={setOpenChannel}
              setOpenUserProfile={setOpenUserProfile}
            />
          )
        }}
      ></ChannelList>
    </>
  )
}

export default SbChannel
