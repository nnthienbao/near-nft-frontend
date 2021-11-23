import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NftCollection({ accountId, contract }) {
  const [nftList, setNftList] = useState([]);
  useEffect(() => {
    contract
      .nft_tokens_for_owner({
        account_id: accountId,
        from_index: "0",
        limit: 1000,
      })
      .then((list) => {
        console.log(list)
        setNftList(list);
      });
  }, []);

  return (
    <Container style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {nftList.map((item) => (
          <Grid item xs={3} key={item.token_id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.metadata.media}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.metadata.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.metadata.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
