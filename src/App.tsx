import BackgroundContainer from "./components/BackgroundContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="flex flex-col flex-1">
      <BackgroundContainer />
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
