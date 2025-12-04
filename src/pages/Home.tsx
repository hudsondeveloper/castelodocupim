import Hero from "../components/Hero";
import Kits from "../components/kits";
import { useEffect } from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Hero />
      <Kits />
      <Testimonials />
      <Footer />
    </div>
  );
}
