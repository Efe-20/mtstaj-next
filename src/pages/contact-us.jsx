import React from "react";

const Contactus = () => {
  return (
    <div>
      <>
        <div className="edu-breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-inner">
              <div className="page-title">
                <h1 className="title">Contact Us</h1>
              </div>
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
        <section className="contact-us-area" style={{ paddingBottom: 100 }}>
          <div className="container">
            <div className="row g-5">
              <div className="offset-xl-3 col-lg-6">
                <div className="contact-form form-style-2">
                  <div className="section-title">
                    <h4 className="title">Get In Touch</h4>
                    <p>
                      Fill out this form for booking a consultant advising
                      session.
                    </p>
                  </div>
                  <form
                    className="rnt-contact-form rwt-dynamic-form"
                    id="contact-form"
                    method="POST"
                    action="mail.php"
                  >
                    <div className="row row--10">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="contact-name"
                          id="contact-name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group col-12">
                        <input
                          type="email"
                          name="contact-email"
                          id="contact-email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group col-12">
                        <input
                          type="tel"
                          name="contact-phone"
                          id="contact-phone"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="form-group col-12">
                        <textarea
                          name="contact-message"
                          id="contact-message"
                          cols={30}
                          rows={4}
                          placeholder="Your message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-12">
                        <button
                          className="rn-btn edu-btn btn-medium submit-btn"
                          name="submit"
                          type="submit"
                        >
                          Submit Message <i className="icon-4" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="shape-group">
                    <li className="shape-1 scene">
                      <img
                        data-depth={1}
                        src="assets/images/about/shape-13.png"
                        alt="Shape"
                      />
                    </li>
                    <li className="shape-2 scene">
                      <img
                        data-depth={-1}
                        src="assets/images/counterup/shape-02.png"
                        alt="Shape"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Contactus;
