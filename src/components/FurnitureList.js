import React, { useEffect, useState } from "react";
import { getHome, useHomeDispatch, useHomeState } from "HomeContext";
import styled from "styled-components";
import FurnitureItem from "./FurnitureItem";

const FurnitureListBlock = styled.div`
  width: 100%;
  height: 100px;
  bottom: -120px;
  left: 0;
  position: absolute;
  background-color: #c9cccf;

  display: flex;
`;
const FurnitureList = () => {
  const state = useHomeState();

  const { data: home, loading, error } = state.home;

  const [products, setProducts] = useState([]);
  //   const products = home && home.productList;
  //   console.log(products);
  useEffect(() => {
    if (home) {
      setProducts(home.productList);
    }
  }, [state]);

  return (
    <FurnitureListBlock>
      {products.map((p) => (
        <FurnitureItem
          key={p.productId}
          img={p.imageUrl}
          outside={p.outside}
          discountRate={p.discountRate}
        ></FurnitureItem>
      ))}
    </FurnitureListBlock>
  );
};

export default FurnitureList;
