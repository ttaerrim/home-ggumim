import React from "react";
import { useHomeState } from "HomeContext";
import ButtonItem from "./ButtonItem";

const ButtonList = () => {
  const state = useHomeState();

  const { data: home } = state.home;

  return (
    <div>
      {home.productList.map((p) => (
        <ButtonItem
          key={p.productId}
          id={p.productId}
          point_x={p.pointX}
          point_y={p.pointY}
          imageUrl={p.imageUrl}
          productName={p.productName}
          outside={p.outside}
          discountRate={p.discountRate}
          priceDiscount={p.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ButtonList;
