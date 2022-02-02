import React, { useCallback } from "react";
import { useFurnitureIdx } from "context/HomeContext";
import styled, { css } from "styled-components";
import FurnitureDetailItem from "components/Detail/FurnitureDetailItem";

const MAGNIFYING_GLASS =
  "https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png";
const X_BUTTON =
  "https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png";
const Button = styled.button`
  display: block;
  width: 22px;
  height: 22px;

  cursor: pointer;
  background-color: transparent;
  background-size: cover;
  border: none;
  position: absolute;
  ${(props) =>
    css`
      top: ${props.x}px;
      left: ${props.y}px;
      background-image: url(${props.backgroundImg});
    `}
`;

const ButtonItem = ({
  id,
  point_x,
  point_y,
  imageUrl,
  productName,
  outside,
  discountRate,
  priceDiscount,
}) => {
  const { clickIdx, setClickIdx } = useFurnitureIdx();

  const onClick = useCallback(
    (e) => {
      setClickIdx(e.target.id);
      if (clickIdx === id.toString()) {
        setClickIdx("0");
      }
    },
    [clickIdx]
  );
  return (
    <React.Fragment>
      <Button
        backgroundImg={clickIdx === id.toString() ? X_BUTTON : MAGNIFYING_GLASS}
        id={id}
        x={point_x}
        y={point_y}
        onClick={onClick}
      ></Button>
      <FurnitureDetailItem
        id={id}
        point_x={point_x}
        point_y={point_y}
        productName={productName}
        outside={outside}
        discountRate={discountRate}
        priceDiscount={priceDiscount}
        imageUrl={imageUrl}
      />
    </React.Fragment>
  );
};

export default ButtonItem;
