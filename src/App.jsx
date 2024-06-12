import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import Lenis from "lenis";
import BottomPage from "./components/BottomPage";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="bg-zinc-800 h-screen w-full text-zinc-200">
      <NavBar />
      <Hero />
      <SecondPage />
      <BottomPage />
    </div>
  );
}

export default App;
