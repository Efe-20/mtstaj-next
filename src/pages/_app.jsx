import React from "react";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import Loader from "@/components/main/Loader";

function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Loader/>
      <Component {...pageProps} />
      <Footer />

      <script src="assets/js/vendor/modernizr.min.js"></script>
      <script src="assets/js/vendor/jquery.min.js"></script>
      <script src="assets/js/vendor/bootstrap.min.js"></script>
      <script src="assets/js/vendor/jquery.countdown.min.js"></script>
      <script src="assets/js/vendor/imageloaded.min.js"></script>
      <script src="assets/js/vendor/jquery-ui.min.js"></script>
      <script src="assets/js/vendor/svg-inject.min.js"></script>
      <script src="assets/js/vendor/smooth-scroll.min.js"></script>
      <script src="assets/js/app.js"></script>

      <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/icomoon.css" />
      <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
      <link rel="stylesheet" href="/assets/css/vendor/magnifypopup.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/odometer.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/lightbox.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/animation.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/jqueru-ui-min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/tipped.min.css" />
      <link rel="stylesheet" href="/assets/css/app.css" />
    </>
  );
}

export default App;
