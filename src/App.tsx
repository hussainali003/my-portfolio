import AboutSection from "./components/AboutSection";
import BackgroundContainer from "./components/BackgroundContainer";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="h-min-full w-full">
      <BackgroundContainer />
      <Header />
      <MainContainer />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
