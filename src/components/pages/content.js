import Services from "./services";

function Content() {
  return (
    <div>
      <div className="container">
        <div className="row content">
          <div className="col-md-6 col-sm-12">
            <div className="pannel-header">
              <h1>
                Who We Are
                <small className="elegant-txt">
                  Premier IT Solutions Provider
                </small>
              </h1>
            </div>
          </div>
          <div className="txt-container col-md-6 col-sm-12 special-content">
            <p>
              A tech start-up formed and managed
              by a team of experienced young IT Professionals with specialities
              in Web Development, Digital Marketing and Computing, with a vision
              to become the premier go-to solutions provider for all
              digitalization needs across Ghana and West Africa.
              <br />
              <button className="read-more-btn">
                Continue&nbsp;{" "}
                <img
                  width="20"
                  height="20"
                  src={require("../../assets/img/arrow.png")}
                  alt="arrow"
                />
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="img-hero"></div>

      <div className="container">
        <div className="row content">
          <div className="col-md-6 col-sm-12">
            <div className="pannel-header">
              <h1>
                Our Focus
                <small className="elegant-txt">
                  On Support & Sustainable Service
                </small>
              </h1>
            </div>
          </div>
          <div className="txt-container col-md-6 col-sm-12">
            <p>
              Our mission is to help boost the morale of discouraged businesses
              that need sustenance in quality and affordable IT Support, Web
              Development & Digital Marketing Services.
              <br />
              <button className="read-more-btn">
                Continue&nbsp;{" "}
                <img
                  width="20"
                  height="20"
                  src={require("../../assets/img/arrow.png")}
                  alt="arrow"
                />
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="row txt-container">
          <h1>Domain Expertise</h1>
          <p>
            Our deep expertise in four key areas enables us to develop
            <br />
            global standard IT solutions for our clients and the development of
            <br />a diverse portfolio of 15-20 companies.
          </p>
          <div className="container">
            <div className="row content">
              <Services />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
