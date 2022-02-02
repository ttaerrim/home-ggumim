import React, { useCallback } from "react";
import { useFurnitureIdx } from "context/HomeContext";
import styled, { css } from "styled-components";

const DISCOUNT_BACKGROUND =
  "https://cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png";

const FurnitureOuterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 71px;

  margin-right: 10px;
  cursor: pointer;
  margin: 26px 4px;
  padding: 2px;
  border-radius: 10px;
  background: ${({ active }) => {
    if (active) {
      return "linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%)";
    }
  }};
`;

const FurnitureItemBlock = styled.div`
  width: 70px;
  height: 70px;
  border: ${({ active }) => {
    if (active) {
      return "1.5px solid white;";
    }
    return "2px solid lightgray;";
  }};
  ${({ img }) =>
    css`
      background: url(${img});
    `}

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 10px;
  position: relative;

  .furniture {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const DiscountDiv = styled.div`
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  background-size: contain;
  position: absolute;
  top: -1px;
  right: 3px;
  width: 16px;
  height: 19px;

  p {
    position: absolute;
    top: 4px;
    color: white;
    font-size: 10px;
    text-shadow: 1px 1px 1px gray;
  }
`;

const FurnitureItem = ({ id, img, outside, discountRate }) => {
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
    <FurnitureOuterBlock active={id.toString() === clickIdx}>
      <FurnitureItemBlock
        active={id.toString() === clickIdx}
        onClick={onClick}
        img={img}
        id={id}
      >
        {!outside && (
          <DiscountDiv>
            <p>{discountRate}%</p>
          </DiscountDiv>
        )}
      </FurnitureItemBlock>
    </FurnitureOuterBlock>
  );
};

export default FurnitureItem;
