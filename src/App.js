import { FurnitureProvider, HomeProvider } from "context/HomeContext";
import HomeTemplate from "components/HomeTemplate";
import FurnitureList from "components/Furniture/FurnitureList";
import ImageContainer from "components/ImageContainer";
import ButtonList from "components/Detail/ButtonList";
import GlobalStyle from "GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <HomeProvider>
        <HomeTemplate>
          <FurnitureProvider>
            <ImageContainer />
            <ButtonList />
            <FurnitureList />
          </FurnitureProvider>
        </HomeTemplate>
      </HomeProvider>
    </>
  );
}

export default App;
