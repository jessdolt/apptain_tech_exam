"use client"

import { Channel } from "@sendbird/uikit-react"
import { ChannelListProvider } from "@sendbird/uikit-react/ChannelList/context"

import React, { useState } from "react"
import SbChannel from "./sb-channel"

const SbAppCustomize = () => {
  const [currentChannel, setCurrentChannel] = useState<any>(null)
  const currentChannelUrl = currentChannel ? currentChannel.url : null

  return (
    <div className="flex h-full">
      <ChannelListProvider
        onChannelSelect={(channel) => {
          setCurrentChannel(channel)
        }}
      >
        <SbChannel setCurrentChannel={setCurrentChannel} />
      </ChannelListProvider>

      <Channel channelUrl={currentChannelUrl} />
    </div>
  )
}

export default SbAppCustomize
