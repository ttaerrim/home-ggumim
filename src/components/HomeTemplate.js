import React, { useEffect } from "react";
import { useHomeState, useHomeDispatch, getHome } from "HomeContext";
import styled from "styled-components";
import ButtonItem from "./ButtonItem";

const HomeTemplateBlock = styled.div`
  width: 500px;
  object-fit: cover;
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column;
`;
const HomeTemplate = ({ children }) => {
  const state = useHomeState();
  const dispatch = useHomeDispatch();

  const { data: home, loading, error } = state.home;

  useEffect(() => {
    getHome(dispatch);
  }, [dispatch]);
  if (!home || loading) return <div>로딩 중</div>;
  if (error) return <div>에러 발생</div>;
  return <HomeTemplateBlock>{children}</HomeTemplateBlock>;
};

export default React.memo(HomeTemplate);
