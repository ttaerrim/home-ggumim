import React from "react";
import { useHomeState } from "context/HomeContext";
import styled from "styled-components";
const Image = styled.img`
  width: 500px;
`;
const ImageContainer = () => {
  const state = useHomeState();

  const { data: home } = state.home;

  return (
    <React.Fragment>
      <Image src={home && home.imageUrl} />
    </React.Fragment>
  );
};

export default ImageContainer;
