import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MintNftForm() {
  return (
    <Box sx={{ mx: "auto", width: 400 }}>
      <TextField
        required
        helperText="Some important text"
        name="upload-photo"
        type="file"
      />
    </Box>
  );
}