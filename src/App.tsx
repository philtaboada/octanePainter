import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Carrusel from "./components/Carrusel";
import Spinner from "./components/Spinner";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Services from "./pages/Services";

function App() {
  const [Value, setValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Value ? (
        <Spinner />
      ) : (
        <ConfigProvider
          theme={{ token: { colorPrimary: "#159792", fontSize: 18 } }}
        >
          <Home />
          <AboutUs />
          <Services />
          <Quotes />
          <ContactUs />
          <Footer />
        </ConfigProvider>
      )}
    </>
  );
}

export default App;
