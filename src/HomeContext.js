import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  home: {
    loading: false,
    data: null,
    error: null,
  },
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
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

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const HomeStateContext = createContext(null);
const HomeDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
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

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useHomeState() {
  const state = useContext(HomeStateContext);
  if (!state) {
    throw new Error("Cannot find HomeProvider");
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useHomeDispatch() {
  const dispatch = useContext(HomeDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find HomeProvider");
  }
  return dispatch;
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
