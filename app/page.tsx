import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Range from "./components/Range";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Range />
        <About />
      </main>
      <Contact />
    </>
  );
}
