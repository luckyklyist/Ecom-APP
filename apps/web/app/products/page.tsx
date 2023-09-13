'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar, Products } from "ui";
import { ProductsType } from "../../types/types";
import { CartContext } from "../../context/cart.context.provider";
import { useContext } from "react";

export default function Page() {
    const {cart}=useContext(CartContext);
    const [products, setProduct] = useState<ProductsType[]>([]);
    const getProducts = async () => {
        try {
            const productList = await axios.get(`http://localhost:3004/api/v1/products`)
            setProduct(productList.data);
        }
        catch (error) {
            console.log("Error Fetching data", error);
        }
    }

    useEffect(() => {
        console.log(products)
        getProducts();
        console.log(cart,"these are the cart items");
    }, [])
    return (
        <>
            <Products products={products} />
        </>
    )
}