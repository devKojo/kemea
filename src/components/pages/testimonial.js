import "./testimonial.css";

function Testimonial() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner c-inner">

        <div className="testimonial-header">
          <h1>Clients' Satisfaction</h1>
          <p>This is what our clients have to say about us.</p>
          </div>

        <div className="carousel-item active " data-bs-interval="10000">
          <div className="d-block d-md-block c-caption">
            <div className="client-img">
              <img src={require("../../assets/img/clients/nikitha.png")} />
            </div>
            <h5>Paulina Nwalley</h5>
            <h6>CEO, Axcomot Ltd.</h6>
            <span className="stars">5-Star!</span>

            <img
              src={require("../../assets/img/rating.png")}
              alt="rating"
              className="rating"
            />

            <p>
              I needed a simple & easy-to-use software to manage my chain of
              fashion boutiques and was highly satisfied with what I got from
              them.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="c-caption d-block d-md-block">
            <div className="client-img">
              <img src={require("../../assets/img/clients/miguel.png")} />
            </div>
            <h5>Kweku Sackey</h5>
            <h6>CEO, DeKkej Co.Ltd</h6>
            <span className="stars">5-Star!</span>

            <img
              src={require("../../assets/img/rating.png")}
              alt="rating"
              className="rating"
            />

            <p>
             They have a very hardworking team and the quality of their
              delivery is exceptional, keep it up guys!
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="c-caption d-block d-md-block">
            <div className="client-img">
              <img src={require("../../assets/img/clients/francisco.png")} />
            </div>
            <h5>Ephraim Arthur</h5>
            <h6>CEO, BelliTech Services</h6>
            <span className="stars">5-Star!</span>

            <img
              src={require("../../assets/img/rating.png")}
              alt="rating"
              className="rating"
            />

            <p>
              I found collaborating with them a good choice always especially on
              Front-End related Developments
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Testimonial;
