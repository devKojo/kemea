import Nav from "../nav";
// import Jumbotron from "../jumbotron";
// import Cardpanel from "../card-panel";
// import Footer from "../footer";
import Slickcarousel from "./carousel";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import "../slick/slick";
import "../../assets/boostrap/bootstrap.min.css";
import "../../assets/boostrap/bootstrap.bundle";
import Content from "./content";
import Testimonial from "./testimonial";

function Home() {
  return (
    <div className="main-container">
      <Nav />
      <Slickcarousel />
      {/* <Jumbotron /> */}
      {/* <Cardpanel /> */}
      <Content />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
}

export default Home();
