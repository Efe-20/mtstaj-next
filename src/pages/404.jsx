export default function NotFound() {
  return (
    <div>
      <>
        <div className="edu-breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-inner">
              <div className="page-title">
                <h1 className="title">Error-404</h1>
              </div>
              <ul className="edu-breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="separator">
                  <i className="icon-angle-right" />
                </li>
                <li className="separator">
                  <i className="icon-angle-right" />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Error-404
                </li>
              </ul>
            </div>
          </div>
          <ul className="shape-group">
            <li className="shape-1">
              <span />
            </li>
            <li className="shape-2 scene">
              <img
                data-depth={2}
                src="assets/images/about/shape-13.png"
                alt="shape"
              />
            </li>
            <li className="shape-3 scene">
              <img
                data-depth={-2}
                src="assets/images/about/shape-15.png"
                alt="shape"
              />
            </li>
            <li className="shape-4">
              <span />
            </li>
            <li className="shape-5 scene">
              <img
                data-depth={2}
                src="assets/images/about/shape-07.png"
                alt="shape"
              />
            </li>
          </ul>
        </div>
        <section className="section-gap-equal error-page-area">
          <div className="container">
            <div className="edu-error">
              <div className="thumbnail">
                <img src="assets/images/others/404.png" alt="404 Error" />
                <ul className="shape-group">
                  <li className="shape-1 scene">
                    <img
                      data-depth={2}
                      src="assets/images/about/shape-25.png"
                      alt="Shape"
                    />
                  </li>
                  <li className="shape-2 scene">
                    <img
                      data-depth={-2}
                      src="assets/images/about/shape-15.png"
                      alt="Shape"
                    />
                  </li>
                  <li className="shape-3 scene">
                    <img
                      data-depth={2}
                      src="assets/images/about/shape-13.png"
                      alt="Shape"
                    />
                  </li>
                  <li className="shape-4 scene">
                    <img
                      data-depth={-2}
                      src="assets/images/counterup/shape-02.png"
                      alt="Shape"
                    />
                  </li>
                </ul>
              </div>
              <div className="content">
                <h2 className="title">404 - Page Not Found</h2>
                <h4 className="subtitle">
                  The page you are looking for does not exist.
                </h4>
                <a href="/" className="edu-btn">
                  <i className="icon-west" />
                  Back to Homepage
                </a>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <li className="shape-1">
              <img src="assets/images/others/map-shape-2.png" alt="Shape" />
            </li>
          </ul>
        </section>
      </>
    </div>
  );
}
