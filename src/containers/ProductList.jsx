import React from "react";
import { CardGroup } from "reactstrap";
import ProductCard from "../compontents/ProductCard";
const ProductList = (products) => {
  return (
    <CardGroup>
      {products.products?.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          nombre={product.nombre}
          descripcion={product.descripcion}
          precio={product.precio}
          existencias={product.existencias}
        />
      ))}
    </CardGroup>
  );
};

export default ProductList;
