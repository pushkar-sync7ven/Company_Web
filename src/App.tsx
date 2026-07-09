import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LOADER_SHOWN_KEY = "sync7ven-loader-shown";

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#c9956a]/30 border-t-[#c9956a] rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loaderAlreadyShown = sessionStorage.getItem(LOADER_SHOWN_KEY) === "true";
    setShowLoader(!loaderAlreadyShown);
    setInitialized(true);
  }, []);

  if (!initialized) {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0d0d0d]" />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}

      <div className="relative z-20">
        <Navbar />

        <main className="pt-16 lg:pt-[72px]">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
