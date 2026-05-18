import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
function App() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 overflow-hidden bg-slate-950 text-slate-100">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
