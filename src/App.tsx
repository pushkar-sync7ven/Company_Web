import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

type Page =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "work"
  | "privacy"
  | "terms";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showLoader, setShowLoader] = useState(true);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}

      <div className="relative z-20">
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        <main className="pt-16 lg:pt-[72px]">
          {currentPage === "home" && <Home onNavigate={navigateTo} />}

          {currentPage === "services" && <Services onNavigate={navigateTo} />}

          {currentPage === "about" && <About onNavigate={navigateTo} />}

          {currentPage === "work" && <Work onNavigate={navigateTo} />}

          {currentPage === "contact" && <Contact />}

          {currentPage === "privacy" && (
            <PrivacyPolicy onNavigate={navigateTo} />
          )}

          {currentPage === "terms" && (
            <TermsConditions onNavigate={navigateTo} />
          )}
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </>
  );
}

export default App;
