import '../main.css';
import logowhite from '../assets/img/logo-white.png'



function Footer() {
    
    return (
       
     
            <div className='footer-container'>
            <div>
                <h4>KEMEA</h4>
                <ol>
                    <li>FAQ</li>
                    <li>Jobs</li>
                    <li>Front Desk</li>
                    <li>Contact</li>
                
                <p>P: (233) 0 55 63 23 849<br />
                A: Takoradi, Western-Region, Ghana.<br/>
                E: info@kemeaitsol.com
                    </p>
                    </ol>
            </div>
            <div>
                <h4>COMPANY</h4>
                <img src={logowhite} alt='company logo white'/>
                <ol>
                    <li>About</li>
                    <p>KEMEA is an IT Solutions provider that has been in
                        business for three (3) years. The company currently 
                        operates from it main office in Takoradi, Ghana.
                        Continue reaing..
                    </p>
                </ol>
            </div>
            <div>
                <h4>PRODUCTS</h4>
                <ol>
                    <li>Digital</li>
                    <li>Enterprise</li>
                    <li>Advertising</li>
                </ol>
            </div>
            <div>
                <h4>REFERENCE</h4>
                <ol>
                     <li>Events</li>
                    <li>Press</li>
                     <li>Blog</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ol>
            </div>
            <div>
                <h4>SOCIAL</h4>
                <ol>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ol>
                </div>
            </div>
      
    )

}

export default Footer;