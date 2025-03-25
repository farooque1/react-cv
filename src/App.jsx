// src/App.js
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Service from "./component/Service";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="container mx-auto flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <Hero />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;