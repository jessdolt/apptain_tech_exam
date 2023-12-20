"use client"
import CreateChannel from "@sendbird/uikit-react/CreateChannel"
import ChannelHeader from "@sendbird/uikit-react/Channel/components/ChannelHeader"
import ChannelListHeader from "@sendbird/uikit-react/ChannelList/components/ChannelListHeader"
import ChannelListUI from "@sendbird/uikit-react/ChannelList/components/ChannelListUI"
import ChannelPreview from "@sendbird/uikit-react/ChannelList/components/ChannelPreview"
import { useChannelListContext } from "@sendbird/uikit-react/ChannelList/context"
import { useCreateChannelContext } from "@sendbird/uikit-react/CreateChannel/context"

import React, { useState } from "react"
import { ChannelList } from "@sendbird/uikit-react"
import Button, {
  ButtonSizes,
  ButtonTypes,
} from "@sendbird/uikit-react/ui/Button"
import Icon, { IconTypes } from "@sendbird/uikit-react/ui/Icon"

const ChannelCustomize = ({ setCurrentChannel, currentChannelUrl }: any) => {
  const { allChannels, initialized, loading } = useChannelListContext()
  const d = useCreateChannelContext()
  // if (initialized) return <PlaceHolder type="WRONG" />
  // if (loading) return <PlaceHolder type="LOADING" />

  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <CreateChannel
          onCreateChannel={(chnnel) => console.log(chnnel)}
          onCancel={() => setOpen(false)}
        ></CreateChannel>
      )}
      <ChannelList
        renderHeader={() => {
          return (
            <ChannelListHeader
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
            ></ChannelListHeader>
          )
        }}
      ></ChannelList>
    </>

    // <ChannelList>
    //   <ChannelListUI></ChannelListUI>
    //   <ChannelPreview >

    //   </ChannelPreview>
    // </ChannelList>
    // <div>
    //   <ChannelListHeader
    //     renderIconButton={() => {
    //       return <Button>e</Button>
    //     }}
    //   />
    //   {allChannels.map((channel, index) => {
    //     return (
    //       <ChannelPreview
    //         channel={channel}
    //         key={channel.url}
    //         tabIndex={index + 1}
    //         renderChannelAction={() => <></>}
    //         isActive={channel.url === currentChannelUrl}
    //         onClick={() => {
    //           console.log("hit")
    //           setCurrentChannel(channel)
    //         }}
    //       ></ChannelPreview>
    //     )
    //   })}
    // </div>
  )
}

export default ChannelCustomize
