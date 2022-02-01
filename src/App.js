import { HomeProvider } from "HomeContext";
import Home from "Home";
function App() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}

export default App;
