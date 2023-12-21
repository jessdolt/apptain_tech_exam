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
      <div>
        <ChannelListProvider
          onChannelSelect={(channel) => {
            setCurrentChannel(channel)
          }}
        >
          <SbChannel />
        </ChannelListProvider>
      </div>

      <div className="flex-1">
        <Channel channelUrl={currentChannelUrl} />
      </div>
    </div>
  )
}

export default SbAppCustomize
