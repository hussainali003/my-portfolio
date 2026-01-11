import AboutSection from "./components/AboutSection";
import BackgroundContainer from "./components/BackgroundContainer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="h-min-full w-full">
      <BackgroundContainer />
      <Header />
      <MainContainer />
      <AboutSection />
    </div>
  );
}

export default App;
