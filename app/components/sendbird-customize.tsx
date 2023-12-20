"use client"
import { Channel, ChannelList } from "@sendbird/uikit-react"
import ChannelListUI from "@sendbird/uikit-react/ChannelList/components/ChannelListUI"
import {
  ChannelListProvider,
  useChannelListContext,
} from "@sendbird/uikit-react/ChannelList/context"
import CreateChannel from "@sendbird/uikit-react/CreateChannel"
import {
  CreateChannelProvider,
  useCreateChannelContext,
} from "@sendbird/uikit-react/CreateChannel/context"
import React, { useState } from "react"
import ChannelCustomize from "./channel"

const SendBirdCustomize = () => {
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
          <ChannelCustomize
            setCurrentChannel={setCurrentChannel}
            currentChannelUrl={currentChannelUrl}
          />
        </ChannelListProvider>
      </div>

      <div className="flex-1">
        <Channel channelUrl={currentChannelUrl} />
      </div>
    </div>
  )
}

export default SendBirdCustomize
