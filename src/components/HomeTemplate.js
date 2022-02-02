import React, { useEffect } from "react";
import { useHomeState, useHomeDispatch, getHome } from "context/HomeContext";
import styled from "styled-components";

const HomeTemplateBlock = styled.div`
  object-fit: cover;
  margin: 0 auto;
  width: 500px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default HomeTemplate;
