import BackgroundContainer from "./components/BackgroundContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

export default function Project() {
  return (
    <div className="min-h-full w-full">
      <BackgroundContainer />
      <div className="flex flex-col flex-1">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </div>
  );
}
