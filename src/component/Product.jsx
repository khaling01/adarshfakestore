import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
const Product = () => {
    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await response.json())
            setloading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return(
        <>
           <div className="col-md-6">
            <Skeleton height={400}/>
           </div>
           <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100}/>
            <Skeleton height={50} width={100} style={{marginLeft:6}}/>
           </div>
        </>
        )
    }
    const ShowProduct = () => {
        return(
        <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="dislplay-5">{product.title}</h1>
                    <p className="lead">
                        Rating{product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark"> Add to cart</button>
                </div>
        </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    );
}

export default Product;