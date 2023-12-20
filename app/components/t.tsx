import React from "react"
import { ChannelList, withSendBird } from "sendbird-uikit"

const MyComponent = ({ sb }) => {
  const handleCreateChannel = (channel) => {
    // Handle the created channel here
    console.log("Channel created:", channel)
  }

  return (
    <div>
      <ChannelList
        onBeforeCreateChannel={() => {
          // Perform any necessary actions before creating a channel
        }}
        onCreateChannel={handleCreateChannel}
        renderChannelPreview={({ channel }) => {
          // Customize the channel preview component
          return <div>{channel.name}</div>
        }}
      />
    </div>
  )
}

export default withSendBird(MyComponent)
