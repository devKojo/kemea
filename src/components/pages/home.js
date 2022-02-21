import Nav from "../nav";
import Carousel from "./carousel";
import "../../assets/bootstrap/css/bootstrap.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/bootstrap/js/bootstrap";
import "../../assets/bootstrap/js/bootstrap.bundle";
import { detectOverflow } from '@popperjs/core/lib/popper';
import Content from "./content";
import Testimonial from "./testimonial";

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
