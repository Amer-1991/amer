import { useEffect } from "react";

import {
  About,
  Contact,
  FAQ,
  Footer,
  Hero,
  Navbar,
  Services,
  Tech,
  Works,
} from "./components";
import WhatsAppBubble from "./components/atoms/WhatsAppBubble";
import ScrollProgress from "./components/atoms/ScrollProgress";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <div className="relative bg-paper text-ink">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Tech />
        <Works />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default App;
