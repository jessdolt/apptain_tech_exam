"use client"
import React, { useEffect, useState } from "react"
import { ACCESSS_TOKEN, APP_ID, USER_ID } from "@/lib"
import { User } from "../interfaces"
import { SendBirdProvider } from "@sendbird/uikit-react"
import SbAppCustomize from "./sb-app-customize"
import Cookies from "js-cookie"

interface SbChatProps {
  user: User | null
}

const SbChat: React.FC<SbChatProps> = ({ user }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])
  if (!isMounted || !user) return null

  return (
    <div className="h-full w-full">
      <SendBirdProvider
        appId={APP_ID}
        // userId={USER_ID}
        // accessToken={ACCESSS_TOKEN}
        userId={user.userId}
        accessToken={user.accessToken}
        nickname={user.nickname}
      >
        <SbAppCustomize />
      </SendBirdProvider>
    </div>
  )
}

export default SbChat
