import Navbar from "./components/Navbar";
import Footer from  "./components/Footer"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Projects";
import Contact from "./sections/Contact";

import { ToastContainer,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
      <Navbar />
      <main className="relative pt-16 pb-12 overflow-hidden bg-slate-950 text-slate-100">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
