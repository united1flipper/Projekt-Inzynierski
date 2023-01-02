import React, { FC } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

const WalletConnection:FC = () => {
  return (
    <div>
      <ConnectWallet />
    </div>
  )
}

export default WalletConnection