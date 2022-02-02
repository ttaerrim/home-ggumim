import React, { createContext, useReducer, useContext, useState } from "react";
import axios from "axios";

const initialState = {
  home: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function homeReducer(state, action) {
  switch (action.type) {
    case "GET_HOME":
      return {
        ...state,
        home: loadingState,
      };
    case "GET_HOME_SUCCESS":
      return {
        ...state,
        home: success(action.data),
      };
    case "GET_HOME_ERROR":
      return {
        ...state,
        home: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const HomeStateContext = createContext(null);
const HomeDispatchContext = createContext(null);
const FurnitureIdxContext = createContext(null);

export function HomeProvider({ children }) {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  return (
    <HomeStateContext.Provider value={state}>
      <HomeDispatchContext.Provider value={dispatch}>
        {children}
      </HomeDispatchContext.Provider>
    </HomeStateContext.Provider>
  );
}

export function FurnitureProvider({ children }) {
  const [clickIdx, setClickIdx] = useState("0");
  return (
    <FurnitureIdxContext.Provider value={{ clickIdx, setClickIdx }}>
      {children}
    </FurnitureIdxContext.Provider>
  );
}

export function useHomeState() {
  const state = useContext(HomeStateContext);
  if (!state) {
    throw new Error("Cannot find HomeProvider");
  }
  return state;
}

export function useHomeDispatch() {
  const dispatch = useContext(HomeDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find HomeProvider");
  }
  return dispatch;
}
export function useFurnitureIdx() {
  const idx = useContext(FurnitureIdxContext);
  if (!idx) {
    throw new Error("Cannot find FurnitureProvider");
  }
  return idx;
}

export async function getHome(dispatch) {
  dispatch({ type: "GET_HOME" });
  try {
    const response = await axios.get(
      "https://cdn.ggumim.co.kr/test/image_product_link.json"
    );
    dispatch({ type: "GET_HOME_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_HOME_ERROR", error: e });
  }
}
