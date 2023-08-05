'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar, Products } from "ui";

export default function Page() {
    const [products, setProduct] = useState([]);
    const getProducts = async () => {
        try {
            const productList = await axios.get(`http://localhost:3001/api/v1/products`)
            setProduct(productList.data);
        }
        catch (error) {
            console.log("Error Fetching data", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <Products products={products}/>
        </>
    )
}