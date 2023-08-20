import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';

export const Products = ({ products }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom className='text-yellow-600'>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4}>

            <div className="card w-96 bg-base-100 shadow-xl p-6 ">
              <img src={product.imageUrl} alt="{product.productName}" />
              <div className="card-body ">
                <h2 className="card-title">{product.productName}</h2>
                <p> {product.price}</p>
                <p> {product.productDescription}</p>
                <div className="card-actions justify-end">
                  <Link href={`/products/${product._id}`} className="btn btn-primary">Buy Now</Link>
              </div>

            </div>
          </div>
          </Grid>
        ))}
    </Grid>
    </Container >
  );
};

