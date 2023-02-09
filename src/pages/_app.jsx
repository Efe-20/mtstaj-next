import React from "react";
import Head from "next/head";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import Loader from "@/components/main/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>MT-Staj Programları</title>
          <meta
            name="description"
            content="MT&Staj Programları'yla en uygun kariyer fırsatlarını bir arada bulabilir; çeşitli haberler ve profesyonel yaşama dair tavsiyelerle farklı bakış açılarına ..."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/images/logo/Mt-logo.png"
          />
        </>
      </Head>
      <Header />
      <Loader />
      <Component {...pageProps} />
      <Footer />

      <script src="assets/js/vendor/modernizr.min.js"></script>
      <script src="assets/js/vendor/jquery.min.js"></script>
      <script src="assets/js/vendor/bootstrap.min.js"></script>
      <script src="assets/js/vendor/jquery.countdown.min.js"></script>
      <script src="assets/js/vendor/imageloaded.min.js"></script>
      <script src="assets/js/vendor/jquery-ui.min.js"></script>
      <script src="assets/js/vendor/svg-inject.min.js"></script>
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
