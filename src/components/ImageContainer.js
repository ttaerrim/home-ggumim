import { useHomeState } from "HomeContext";
import React from "react";

const ImageContainer = () => {
  const state = useHomeState();

  const { data: home } = state.home;

  return (
    <>
      <img src={home && home.imageUrl} />
    </>
  );
};

export default ImageContainer;
