import React from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import ThemeProvider from "../context/ThemeProvider";
import About from "../sections/About";
import Contact from "../sections/Contact";
import { Toaster } from "react-hot-toast";
import Projects from "../sections/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <Toaster position="top" reverseOrder={false} />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
