import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="edu-header header-style-1 header-fullwidth">
        <div className="container-fluid">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="header-navbar"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="header-brand">
              <div className="logo">
                <Link href="">
                  <img
                    className="logo-light"
                    src="/assets/images/logo/Mt-logo.png"
                    alt="Corporate Logo"
                    style={{ width: 115 }}
                  />
                </Link>
              </div>
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li>
                      <Link href="/">Anasayfa</Link>
                    </li>
                    <li>
                      <Link href="/postings">Açık İlanlar</Link>
                    </li>
                    <li>
                      <Link href="/youngTalents">Genç Yetenek Programları</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Bloglar</Link>
                    </li>
                    <li>
                      <a href="https://mtstaj.co/live/" target="_blank">
                        MT-Staj Live
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <ul className="header-action">
                  <li className="mobile-menu-bar d-xl-none">
                    <button className="hamberger-button">
                      <i className="icon-54" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-mobile-menu">
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <a href="">
                  <img
                    className="logo-light"
                    src="/assets/images/logo/Mt-logo.png"
                    alt="Corporate Logo"
                  />
                </a>
              </div>
              <div className="close-menu">
                <button
                  className="close-button"
                  style={{ backgroundColor: "#234b59", color: "#fff" }}
                >
                  <i className="icon-73" />
                </button>
              </div>
            </div>
            <ul className="mainmenu">
              <li>
                <a href="/">Anasayfa</a>
              </li>
              <li>
                <a href="/postings">Açık İlanlar</a>
              </li>
              <li>
                <a href="/youngTalents">Genç Yetenek Programları</a>
              </li>
              <li>
                <a href="/blogs">Bloglar</a>
              </li>
              <li>
                <a href="https://mtstaj.co/live/" target="_blank">
                  MT-Staj Live
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
