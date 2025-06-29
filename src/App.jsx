import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar/AppBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CarPage = lazy(() => import("./pages/CarPage/CarPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const location = useLocation();
  return (
    <div>
      <AppBar />
      <AnimatePresence mode="wait">
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          key={location.pathname}>
          <Suspense fallback={<Loader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/catalog/:id" element={<CarPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
