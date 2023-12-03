"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "../../../types/types";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context.provider";
import Comments from "./comments";

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
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="border border-white p-8 rounded-lg shadow-lg w-[94vw]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={productData?.imageUrl}
                alt={productData?.productName}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h1 className="text-4xl font-semibold text-white">
                {productData?.productName}
              </h1>
              <p className="text-sm text-white my-4">
                {productData?.productDescription}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus architecto placeat necessitatibus deserunt. Labore ullam
                earum perspiciatis. Perferendis maxime neque ratione architecto
                minima, delectus nobis, facere dolore iusto, aperiam aliquid!
              </p>
              <div className="mt-4">
                {cartSelected ? (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg w-30 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => toggleCart()}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => toggleCart()}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default ProductDetail;
