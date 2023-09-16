"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../../../types/types";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context.provider";

const ProductDetail = ({ params }) => {
  const { cart, addToCart, totalCart, deleteFromCart } =
    useContext(CartContext);
  const productId = params.id;
  const [productData, setProductData] = useState<ProductsType>();
  const [cartSelected, setCartSelected] = useState(false);

  const toggleCart = () => {
    setCartSelected(!cartSelected);
    if (!cartSelected) {
      addToCart({
        productId: productData?._id,
        productName: productData?.productName,
        price: productData?.price,
        imageUrl: productData?.imageUrl,
      });
    } else {
      deleteFromCart(productData?._id);
    }
  };

  const checkProductInCart = () => {
    const products = JSON.parse(localStorage.getItem("cart"));
    const productExist = products.some(
      (product) => product.productId === productId
    );
    if (productExist) {
      setCartSelected(true);
    }
  };

  const getProductsDetail = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3004/api/v1/products/${productId}`
      );
      setProductData(resp.data);
      checkProductInCart();
    } catch (error) {
      console.log("Error occured");
    }
  };
  useEffect(() => {
    getProductsDetail();
  }, []);
  return (
    <div className="flex flex-col justify-center  items-center mt-20">
      <div className="card lg:card-side  m-6 ">
        <img src={productData?.imageUrl} alt="Album" width={300} />
        <div className="card-body ml-10">
          <h2 className="card-title text-5xl text-warning font-bold ">
            {productData?.productName}
          </h2>
          <p className="text-sm">{productData?.productDescription}</p>

          {cartSelected ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-40 "
              onClick={() => toggleCart()}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
              onClick={() => toggleCart()}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
