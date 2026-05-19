import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Projects";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 overflow-hidden bg-slate-950 text-slate-100">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
