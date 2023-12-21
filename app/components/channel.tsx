"use client"
import { useState } from "react"
import axios from "axios"

import { ChannelList } from "@sendbird/uikit-react"
import CreateChannel from "@sendbird/uikit-react/CreateChannel"
import ChannelListHeader from "@sendbird/uikit-react/ChannelList/components/ChannelListHeader"
import Icon, { IconTypes } from "@sendbird/uikit-react/ui/Icon"
import EditUserProfile from "@sendbird/uikit-react/EditUserProfile"

const ChannelCustomize = () => {
  const [open, setOpen] = useState(false)
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
      const response = await axios.post("/api/channel", data)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  const handleOnEditProfile = async (user: any) => {
    const { userId, plainProfileUrl, nickname } = user

    try {
      const response = await axios.put("/api/user", {
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
      {open && (
        <CreateChannel
          onCreateChannel={handleOnChannelCreate}
          onCancel={() => setOpen(false)}
        ></CreateChannel>
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
            <ChannelListHeader
              onEdit={() => setOpenUserProfile(true)}
              renderIconButton={() => (
                <button
                  className="sendbird-iconbutton"
                  style={{
                    height: 32,
                    width: 32,
                  }}
                  onClick={() => setOpen(true)}
                >
                  <span className="sendbird-iconbutton__inner">
                    <Icon
                      type={IconTypes.CREATE}
                      width={24}
                      height={24}
                      className="sendbird-icon-color--primary"
                    />
                  </span>
                </button>
              )}
            />
          )
        }}
      ></ChannelList>
    </>
  )
}

export default ChannelCustomize
