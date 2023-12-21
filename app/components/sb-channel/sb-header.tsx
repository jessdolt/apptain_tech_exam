import ChannelListHeader from "@sendbird/uikit-react/ChannelList/components/ChannelListHeader"
import Icon, { IconTypes } from "@sendbird/uikit-react/ui/Icon"
import React from "react"

interface SbHeaderProps {
  setOpenUserProfile: React.Dispatch<React.SetStateAction<boolean>>
  setOpenChannel: React.Dispatch<React.SetStateAction<boolean>>
}

const SbHeader: React.FC<SbHeaderProps> = ({
  setOpenUserProfile,
  setOpenChannel,
}) => {
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
          onClick={() => setOpenChannel(true)}
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
}

export default SbHeader
