function BootstrapCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../../assets/img/data-analytics.jpg")}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Data Analytics</h5>
            <p>
              We expert in data analytics that will help you monetor your<br/>
              company's business performance over time.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={require("../../assets/img/tech-corporate.jpg")}
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Enterprise Systems</h5>
            <p>We offer managed ERP for on-premise implementation.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={require("../../assets/img/system-engineer.jpg")}
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cloud Computing</h5>
            <p>
              Keep your business data future proof by migrating to the cloud
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={require("../../assets/img/corporate1.jpg")}
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Corporate IT Strategy</h5>
            <p>
              Our team of experts will represent your IT needs to match your
              business model.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={require("../../assets/img/digital-marketing.jpg")}
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Digital Marketing</h5>
            <p>
              Kick start your social media and online advertising campaignes
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={require("../../assets/img/web.jpg")}
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Web Development</h5>
            <p>
              We are masters in web development for companies large to small.
            </p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BootstrapCarousel;
