import './nav.css';
import './nav.css';
import logo from '../assets/img/kemea-site-logo.png'
import { Link } from 'react-router-dom';


function Nav() {
    
    return (
        
        <div className='nav-bar'>      
            <div className='nav-items'>
                <div className='nav-col-1'></div>
                <div className='nav-col-2'>
                    <img width="70%" height="auto" src={logo} alt="website logo"></img>
                </div>
                <div className='nav-col-3'></div>
                <div className='nav-col-4'> </div>
        
                    <div className='nav-col-5'>
                         <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li>
                            <select className='dropdown'>
                                <option>Services</option>
                                {/* <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Computer Services</option>
                                <option>Training</option>
                                <option>Consultancy</option> */}
                            </select>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
        </div>

        </div>

    )
}


export default Nav;


