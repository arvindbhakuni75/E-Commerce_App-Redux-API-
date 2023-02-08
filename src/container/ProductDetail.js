import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";

export default function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error ", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <>
      <div
        className="container"
        style={{ paddingLeft: "15%", paddingRight: "15%" }}
      >
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="card mb-12 shadow-lg p-3 mb-5 bg-body rounded" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-3">{title}</h5>
              <p className="card-text badge bg-success p-3 fs-4">$ {price}</p>
              <p className="card-text bg-dark text-light p-1 text-end"><span className="text-uppercase fw-bold mx-4">{category}</span></p>
              <p className="card-text"><small className="text-muted">{description}</small></p>
              <button type="button" className="btn btn-warning fw-bold my-2">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
        )}
      </div>

    </>
  );
}
