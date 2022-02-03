import React from "react";
import { useFurnitureIdx } from "context/HomeContext";
import styled, { css } from "styled-components";

const FurnitureDetailBox = styled.div`
  width: 150px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 7px;
  position: absolute;
  display: flex;
  ${({ x, y }) => {
    if (y > 300) {
      return css`
        top: ${x + 28}px;
        left: ${y - 100}px;
      `;
    }
    if (x > 300) {
      return css`
        top: ${x - 68}px;
        left: ${y - 20}px;
      `;
    }
    return css`
      top: ${x + 28}px;
      left: ${y - 20}px;
    `;
  }}
  z-index: 10;
  box-shadow: 1px 2px 3px 1px rgba(194, 194, 194, 0.54);

  &:after {
    border-top: 0px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid white;
    content: "";
    position: absolute;
    top: -6px;
    left: 24px;
    ${({ x, y }) => {
      if (y > 300) {
        return css`
          left: 104px;
        `;
      }
      if (x > 300) {
        return css`
          border-top: 7px solid white;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 0px solid transparent;
          top: 60px;
          left: 24px;
        `;
      }
    }}
  }
`;
const Img = styled.img`
  width: 50px;
  margin: 7px;
  border-radius: 4px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.625rem;
  justify-content: space-between;
`;
const ProductName = styled.div`
  margin: 10px 5px 10px 0;
  color: #333c45;
`;
const PriceDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: flex-start;
  color: #181d1f;
  font-size: 0.785rem;
  font-weight: bold;
`;
const PriceName = styled.span`
  margin-right: 3px;
  &.predict {
    font-weight: bold;
    font-size: 0.5rem;
    color: #898f94;
  }
  &.discount {
    color: #ff585d;
    font-size: 0.725rem;
    font-weight: bold;
  }
`;
const FurnitureDetailItem = ({
  id,
  point_x,
  point_y,
  productName,
  outside,
  discountRate,
  priceDiscount,
  imageUrl,
}) => {
  const { clickIdx, setClickIdx } = useFurnitureIdx();

  const onClick = (e) => {
    setClickIdx(e.target.id);
    if (clickIdx === id.toString()) {
      setClickIdx("0");
    }
  };
  return (
    <React.Fragment>
      {clickIdx === id.toString() && (
        <FurnitureDetailBox x={point_x} y={point_y}>
          <Img src={imageUrl} />
          <Desc>
            <ProductName>{productName}</ProductName>
            <PriceDiv>
              <PriceName className={outside ? "predict" : "discount"}>
                {outside ? "예상가" : `${discountRate}%`}
              </PriceName>
              {priceDiscount.toLocaleString()}
            </PriceDiv>
          </Desc>
        </FurnitureDetailBox>
      )}
    </React.Fragment>
  );
};

export default FurnitureDetailItem;
