import 'regenerator-runtime/runtime'
import React, {useState} from 'react'
import Navibar from './components/Navibar'
import TabNft from './components/TabNft'
import Welcome from './components/Welcome'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App({accountId, contract, walletConnection, logout, login}) {
  const [isSignIn, setIsSignIn] = useState(false);
  React.useEffect(
    () => {
      setIsSignIn(walletConnection.isSignedIn());
    },
    []
  )

  return (
    <>
      <Navibar
        accountId={accountId}
        isSignIn={isSignIn}
        logout={logout}
        login={login}
      />
      {isSignIn
      ?<TabNft accountId={accountId} contract={contract} />
      :<Welcome accountId={accountId} contract={contract} login={login} />
      }
    </>
  )
}
