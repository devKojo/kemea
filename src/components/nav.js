import "./nav.css";
import logo from "../assets/img/kemea-site-logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
   <div>


<nav class="navbar  fixed-top navbar-light bg-light">


   <div class="container-fluid">
    <a class="navbar-brand" href="#">
       <img width="160" height="40" src={logo} alt="website logo"></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mb-2 mb-lg-0 text-center">
          
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="">
                 <Link to="/">HOME</Link>
               </a>
             </li>

             <li className="nav-item">
               <a className="nav-link" href="#">
                 <Link to="/about">ABOUT</Link>
               </a>
             </li>

  <li className="nav-item">
              <a className="nav-link" href="#">
                 <Link to="/team">TEAM</Link>
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#">
                 <Link to="/contact">CONTACT</Link>
               </a>
             </li>
        </ul>
        </div>
        </div>
</nav>

     
     </div>
  );
}

export default Nav;
