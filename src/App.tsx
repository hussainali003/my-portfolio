import AboutSection from "./components/AboutSection";
import BackgroundContainer from "./components/BackgroundContainer";
import ContactSection from "./components/ContactSection";
import DetailSection from "./components/detailSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="h-min-full w-full">
      <BackgroundContainer />
      <Header />
      <MainContainer />
      <AboutSection />
      <DetailSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
