import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer
        data-aos="fade-up"
        className="edu-footer footer-lighten bg-image footer-style-1"
        style={{ backgroundColor: "#f0f4f5" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row g-5 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 ">
                <div
                  className="edu-footer-widget d-flex justify-content-center align-items-center gap-5"
                  style={{ paddingLeft: 20 }}
                >
                  <div className="logo">
                    <a href="/"></a>
                    <img
                      className="logo-light"
                      src="/assets/images/logo/Mt-logo.png"
                      alt="Corporate Logo"
                      style={{ width: 140, minWidth: 140 }}
                    />
                  </div>
                  <p className="widget-title p-0 m-0">
                    En Uygun MT&amp;Staj Programları, <br /> Eğitimler ve Çok
                    Daha Fazlası!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 justify-content-center align-items-center">
                <div className="edu-footer-widget d-flex justify-content-center align-items-center">
                  <div
                    className="inner d-flex justify-content-center align-items-center"
                    style={{ gap: 15 }}
                  >
                    <div
                      style={{ maxWidth: "fit-content" }}
                      className="input-group m-0 p-0 footer-subscription-form"
                    >
                      <button
                        className="edu-btn btn-medium"
                        type="button"
                        style={{ backgroundColor: "#234b59" }}
                      >
                        <Link href="/contact-us" style={{ color: "#fff" }}>
                          İletişim
                        </Link>
                        <i className="icon-4" />
                      </button>
                    </div>
                    <ul className="social-share icon-transparent">
                      <li>
                        <a
                          href="https://www.facebook.com/MTStajProgramlari"
                          className="color-fb"
                        >
                          <i className="icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/mtstajprogramlari/?viewAsMember=true"
                          className="color-linkd"
                          target={"_blank"}
                        >
                          <i className="icon-linkedin2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/mtstajprogramlari/?hl=tr"
                          className="color-ig"
                          target={"_blank"}
                        >
                          <i className="icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/MTStaj"
                          className="color-twitter"
                          target={"_blank"}
                        >
                          <i className="icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCTd_1ukC4dY-2NyHdI5tFEw"
                          className="color-yt"
                          target={"_blank"}
                        >
                          <i className="icon-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <p>
                    <strong>
                      Copyright ©2022 Tüm Hakları Saklıdır. MT&amp;Staj
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
