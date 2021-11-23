import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MintNftForm() {
  return (
    <Box sx={{ mx: "auto", width: 400 }} style={{padding: 20}}>
      <Typography variant="subtitle1" component="div">
        File upload
      </Typography>
      <TextField fullWidth required name="upload-photo" type="file" />

      <Typography style={{marginTop: 10}} variant="subtitle1" component="div">
        Name
      </Typography>
      <TextField fullWidth required name="name" type="input" placeholder="Enter NFT name..." />

      <Typography style={{marginTop: 10}} variant="subtitle1" component="div">
        Description
      </Typography>
      <TextField fullWidth required name="description" type="input" placeholder="Enter NFT description..." />

      <Button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 10}} variant="outlined" size="large">Mint</Button>
    </Box>
  );
}
