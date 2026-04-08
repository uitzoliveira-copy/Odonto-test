import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import PaymentMethods from "./components/PaymentMethods";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AIConsultant from "./components/AIConsultant";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="relative min-h-screen selection:bg-premium-gold selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <div>
              <BeforeAfter />
            </div>
            <div className="reveal">
              <About />
            </div>
            <div className="reveal">
              <Treatments />
            </div>
            <div className="reveal">
              <Testimonials />
            </div>
            <div className="reveal">
              <PaymentMethods />
            </div>
            <div className="reveal">
              <Booking />
            </div>
            <div className="reveal">
              <FAQ />
            </div>
            <div className="reveal">
              <Location />
            </div>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <AIConsultant />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}