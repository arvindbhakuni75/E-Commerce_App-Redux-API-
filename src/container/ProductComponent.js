import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product, i) => {
    const { id, image, title, price, category } = product;

    return (
      <div className="col-md-3 my-3" key={i}>
        <div className="card">
          <img
            src={image}
            className="card-img-top p-4"
            alt="..."
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">$ {price}</h5>
            <p className="card-text text-uppercase">{category}</p>
            <Link to={`/product/${id}`} style={{ color: "black" }}>
              <p href="#" className="btn btn-primary">
                View Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
}
