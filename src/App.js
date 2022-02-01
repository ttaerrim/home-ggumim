import { HomeProvider } from "HomeContext";
import HomeTemplate from "components/HomeTemplate";
import FurnitureList from "components/FurnitureList";
import ImageContainer from "components/ImageContainer";
import ButtonList from "components/ButtonList";
function App() {
  return (
    <HomeProvider>
      <HomeTemplate>
        <ImageContainer />
        <ButtonList />
        <FurnitureList />
      </HomeTemplate>
    </HomeProvider>
  );
}

export default App;
