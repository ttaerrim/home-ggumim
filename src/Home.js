import React, { useState } from "react";
import { useHomeState, useHomeDispatch, getHome } from "./HomeContext";

function Home() {
  //   const [userId, setUserId] = useState(null);
  const state = useHomeState();
  const dispatch = useHomeDispatch();

  const { data: home, loading, error } = state.home;
  const fetchData = () => {
    getHome(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!home) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {home.productList.map((p) => (
          <li key={p.productId}>
            {p.productName}
            <img src={p.imageUrl} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
