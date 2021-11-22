import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initContract, logout, login } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <App
        accountId={window.accountId}
        contract={window.contract}
        walletConnection={window.walletConnection}
        logout={logout}
        login={login}
      />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
