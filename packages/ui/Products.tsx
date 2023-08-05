import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

export const Products = ({products}) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" image={product.imageUrl} alt={product.name} height="200" />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.productName}
                </Typography>
                <Typography variant="h6" component="h2">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.productDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

