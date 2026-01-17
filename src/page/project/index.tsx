import BackgroundContainer from "./components/BackgroundCOntainer";
import Header from "./components/Header";

export default function Project() {
  return (
    <div className="min-h-full w-full">
      <BackgroundContainer />
      <div className="flex flex-col flex-1 items-center">
        <Header />
      </div>
    </div>
  );
}
