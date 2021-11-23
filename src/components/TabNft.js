import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MintNftForm from "./MintNftForm";

export default function TabNft({ accountId, contract }) {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <>
      <Tabs
        sx={{ bgcolor: "#dbf2ff" }}
        centered
        value={value}
        onChange={handleChange}
        aria-label="tabnft"
      >
        <Tab label="Mint" {...a11yProps(0)} />
        <Tab label="Your NFT" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MintNftForm accountId={accountId} contract={contract} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Your NFT</h1>
      </TabPanel>
    </>
  );
}
