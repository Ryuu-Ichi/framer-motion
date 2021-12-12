import React from "react";
import "./styles/index.css";
import styles from "./index.module.css";
import { Header } from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { Section1 } from "./components/Pages/Section1";
import { Section3 } from "./components/Pages/Section3";
import { Section2 } from "./components/Pages/Section2";
import { BigPost } from "./components/Pages/ForExamples/BigPost";
import { AnimatePresence } from "framer-motion";
import { useMedia, UseMediaContext } from "./hooks/useMedia";

function App() {
  const location = useLocation();
  const media = useMedia();

  return (
    <UseMediaContext.Provider value={media}>
      <div className={styles.App}>
        <Header />
        <main className={styles.main}>
          <AnimatePresence exitBeforeEnter>
            {/*initial={false}*/}
            <Routes location={location} key={location.pathname}>
              <Route path={routes.section1} element={<Section1 />} />
              <Route path={routes.section2.root} element={<Section2 />} />
              <Route path={routes.section2.example2_6} element={<BigPost />} />
              <Route path={routes.section3} element={<Section3 />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </UseMediaContext.Provider>
  );
}

export default App;
