import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Welcome({ accountId, contract, login }) {
  return (
    <Box
      sx={{ mx: "auto", width: 700, justifyContent: "center" }}
      style={{ padding: 20 }}
    >
      <Typography gutterBottom variant="h3" component="div">
        Log in to create your NFT
      </Typography>
      <Button onClick={login} variant="contained" size="large">
        Sign in
      </Button>
    </Box>
  );
}
