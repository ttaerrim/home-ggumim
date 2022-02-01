import { useHomeState } from "HomeContext";
import React, { useState } from "react";
import styled, { css } from "styled-components";

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

const FurnitureDetailBox = styled.div`
  width: 140px;
  height: 60px;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  ${(props) =>
    css`
      top: ${props.x + 20}px;
      left: ${props.y}px;
    `}
  z-index: 10;

  img {
    width: 50px;
  }
  .info {
    font-size: 0.625rem;
  }
  .productName {
  }
  .predict {
    font-weight: bold;
    color: gray;
  }
  .discount {
    color: #ff585d;
    font-size: 0.875rem;
    font-weight: bold;
  }
  .price {
    font-size: 0.875rem;
    font-weight: bold;
  }
`;
const PriceDiv = styled.div`
  display: flex;
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
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick(!isClick);
    console.log(isClick);
  };
  return (
    <div>
      <Button
        backgroundImg={isClick ? X_BUTTON : MAGNIFYING_GLASS}
        id={id}
        x={point_x}
        y={point_y}
        onClick={onClick}
      ></Button>
      {isClick && (
        <FurnitureDetailBox x={point_x} y={point_y}>
          <img src={imageUrl} />
          <div className="info">
            <p className="productName">{productName}</p>
            <PriceDiv>
              <p className={outside ? "predict" : "discount"}>
                {outside ? "예상가" : `${discountRate}%`}
              </p>
              <p className="price">{priceDiscount}</p>
            </PriceDiv>
          </div>
        </FurnitureDetailBox>
      )}
    </div>
  );
};

export default ButtonItem;
