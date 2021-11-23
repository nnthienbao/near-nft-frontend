import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Big from 'big.js';
import {uploadToStorage} from '../nftStorage'

const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();

export default function MintNftForm({accountId, contract}) {
  const [fileUpload, setFileUpload] = useState(null);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [errorFileUpload, setErrorFileUpload] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDes, setErrorDes] = useState(false);

  const mint = () => {
    let error = false;
    setErrorFileUpload(false);
    setErrorTitle(false);
    setErrorDes(false);
    if (!fileUpload) {
      error = true;
      setErrorFileUpload(true);
    }
    if (!title || title === "") {
      error = true;
      setErrorTitle(true);
    }
    if (!des || des === "") {
      error = true;
      setErrorDes(true);
    }
    if (!error) {
      console.log('Do upload file')
      uploadToStorage({fileUpload, title, des}).then(response => {
        if (response.data && response.data.ok && response.data.value.cid) {
          const cid = response.data.value.cid;
          const urlData = `https://${cid}.ipfs.dweb.link`;
          mintNft({urlData, title, des});
        }
      });
    }
  };

  const mintNft = ({urlData, title, des}) => {
    console.log('Do mint nft');
    const nftId = `${accountId}_${new Date().getTime()}`;
    console.log(nftId, title, des, urlData);
    contract.nft_mint(
      { token_id: nftId, receiver_id: accountId, metadata: {title: title, description: des, media: urlData} },
      BOATLOAD_OF_GAS,
      Big(1).times(10 ** 24).toFixed()
    ).then(() => {
      console.log('NFT minted')
    });
  }

  return (
    <Box sx={{ mx: "auto", width: 400 }} style={{ padding: 20 }}>
      <Typography variant="subtitle1" component="div">
        File upload
      </Typography>
      <TextField
        error={errorFileUpload}
        helperText={errorFileUpload ? "Please choose file upload" : ""}
        fullWidth
        required
        name="upload-photo"
        type="file"
        id="fileUpload"
        name="fileUpload"
        onChange={(e) => setFileUpload(e.target.files[0])}
      />

      <Typography style={{ marginTop: 10 }} variant="subtitle1" component="div">
        Title
      </Typography>
      <TextField
        error={errorTitle}
        helperText={errorTitle ? "Title cannot be empty" : ""}
        fullWidth
        required
        name="title"
        type="input"
        placeholder="Enter NFT title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Typography style={{ marginTop: 10 }} variant="subtitle1" component="div">
        Description
      </Typography>
      <TextField
        error={errorDes}
        helperText={errorDes ? "File description cannot be empty" : ""}
        fullWidth
        required
        name="description"
        type="input"
        placeholder="Enter NFT description..."
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />

      <Button
        onClick={mint}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
        variant="outlined"
        size="large"
      >
        Mint
      </Button>
    </Box>
  );
}
