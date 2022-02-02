import React, { useEffect, useState } from "react";
import { useHomeState } from "context/HomeContext";
import FurnitureItem from "components/Furniture/FurnitureItem";
import styled from "styled-components";

const FurnitureListBlock = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  overflow-x: scroll;
  overflow-y: hidden;
`;
const FurnitureList = () => {
  const state = useHomeState();

  const { data: home } = state.home;

  const [products, setProducts] = useState([]);
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
          id={p.productId}
          img={p.imageUrl}
          outside={p.outside}
          discountRate={p.discountRate}
        ></FurnitureItem>
      ))}
    </FurnitureListBlock>
  );
};

export default FurnitureList;
