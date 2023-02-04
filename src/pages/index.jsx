import React from "react";
import Head from "next/head";

// import Pages
import Home from "@/components/sections/home/Home";

export default function App() {
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
      <Home />      

    </>
  );
}
