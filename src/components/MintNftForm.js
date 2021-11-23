import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MintNftForm() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileDes, setFileDes] = useState("");
  const [errorFileUpload, setErrorFileUpload] = useState(false);
  const [errorFileName, setErrorFileName] = useState(false);
  const [errorFileDes, setErrorFileDes] = useState(false);

  const mint = () => {
    setErrorFileUpload(false);
    setErrorFileName(false);
    setErrorFileDes(false);
    if (!fileUpload) {
      setErrorFileUpload(true);
    }
    if (!fileName) {
      setErrorFileName(true);
    }
    if (!fileDes) {
      setErrorFileDes(true);
    }
    if (!errorFileUpload && !errorFileName && !errorFileDes) {
      
    }
  };

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
        Name
      </Typography>
      <TextField
        error={errorFileName}
        helperText={errorFileName ? "Filename cannot be empty" : ""}
        fullWidth
        required
        name="name"
        type="input"
        placeholder="Enter NFT name..."
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />

      <Typography style={{ marginTop: 10 }} variant="subtitle1" component="div">
        Description
      </Typography>
      <TextField
        error={errorFileDes}
        helperText={errorFileDes ? "File description cannot be empty" : ""}
        fullWidth
        required
        name="description"
        type="input"
        placeholder="Enter NFT description..."
        value={fileDes}
        onChange={(e) => setFileDes(e.target.value)}
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
