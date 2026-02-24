import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import { useTranslation } from "react-i18next";
import Projects from "./components/Projects";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const direction = i18n.dir(i18n.language);
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = direction;
  }, [i18n, i18n.language]);

  return (
    <>
      <Header />
            <div className="relative w-full overflow-x-hidden ">
      <Hero />
      <About /></div>
      <Projects/>
    </>
  );
}

export default App;
