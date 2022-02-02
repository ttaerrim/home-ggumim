import React from "react";
import { useHomeState } from "context/HomeContext";
import ButtonItem from "components/Detail/ButtonItem";

const ButtonList = () => {
  const state = useHomeState();

  const { data: home } = state.home;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ButtonList;
