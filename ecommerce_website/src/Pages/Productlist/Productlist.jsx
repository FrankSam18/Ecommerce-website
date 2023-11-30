import React from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Productcard/Productcard";
import Usefetch from "../../Components/hooks/Usefetch";
import "./Productlist.css";

const Productlist = () => {
  const [data, loading, error] = Usefetch({
    url: "https://fakestoreapi.com/products",
  });
  
  return (
    <Layout pageNumber={1}>
      <div className="products-container">
        {data.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Productlist;