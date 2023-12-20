"use client"
import React, { useEffect, useState } from "react"
import { ACCESSS_TOKEN, APP_ID, USER_ID } from "@/lib"
import { User } from "../interfaces"
import { SendBirdProvider } from "@sendbird/uikit-react"
import SendBirdCustomize from "./sendbird-customize"

interface ChatProps {
  user: User | null
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null

  return (
    <div className="h-full w-full">
      <SendBirdProvider
        appId={APP_ID}
        userId={USER_ID}
        accessToken={ACCESSS_TOKEN}
        // userId={user.userId}
        // accessToken={user.accessToken}
        // nickname={user.nickname}
      >
        <SendBirdCustomize />
      </SendBirdProvider>
    </div>
  )
}

export default Chat
