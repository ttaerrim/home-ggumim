import React from "react";
import styled, { css } from "styled-components";

const DISCOUNT_BACKGROUND =
  "https://cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png";

const FurnitureItemBlock = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  .furniture {
    width: 100%;
    height: 100%;
  }
`;

const DiscountImg = styled.img`
  position: relative;
  top: -85px;
  left: 50px;
  width: 16px;
`;
const FurnitureItem = ({ img, outside, discountRate }) => {
  return (
    <FurnitureItemBlock>
      <img className="furniture" src={img} />
      {!outside && <DiscountImg src={DISCOUNT_BACKGROUND} />}
    </FurnitureItemBlock>
  );
};

export default FurnitureItem;
