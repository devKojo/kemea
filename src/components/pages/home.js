import Nav from "../nav";
import Content from "./content";
import Testimonial from "./testimonial";
import Carousel from "./carousel";
require("../../assets/bootstrap/css/bootstrap.css");
// require("../../assets/bootstrap/css/bootstrap.min.css");

// require("../../assets/bootstrap/js/bootstrap");
// require("../../assets/bootstrap/js/bootstrap.bundle");
require("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
require("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.js");
require("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
require("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js");
// import { detectOverflow } from "@popperjs/core/lib/popper";

function Home() {
  return (
    <div className="main-container">
      <Nav />
      <Carousel />
      {/* <Jumbotron /> */}
      {/* <Cardpanel /> */}
      <Content />
      <Testimonial />
    </div>
  );
}

export default Home();
