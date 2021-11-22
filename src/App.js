import 'regenerator-runtime/runtime'
import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { login, logout } from './utils'

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mint your NFT
          </Typography>
          {isSignIn
          ? <Button onClick={logout} color="inherit">Logout</Button>
          : <Button onClick={login} color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}
