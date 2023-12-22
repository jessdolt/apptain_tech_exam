"use client"
import React, { useEffect, useState } from "react"
import { APP_ID } from "@/lib"
import { User } from "../interfaces"
import { SendBirdProvider } from "@sendbird/uikit-react"
import SbAppCustomize from "./sb-app-customize"

interface SbChatProps {
  user: User | null
}

const SbChat: React.FC<SbChatProps> = ({ user }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted || !user || !user.accessToken) return null

  return (
    <div className="h-full w-full">
      <SendBirdProvider
        appId={APP_ID}
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
