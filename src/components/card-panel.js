import '../main.css';
import devicon from '../assets/icons/web-programming.png';
import promoicon from '../assets/icons/promotion.png';
import mouseicon from '../assets/icons/mouse.gif';
import presentationicon from '../assets/icons/presentation.png'


function Cardpanel() {
    
    return(

        <div className='section'>
            <div className='pannel-header'><h1>Services</h1></div>
            <div className='card-panel'>
                <div className='card-container'>
                    <div className='card'>
                        <img src={devicon} alt='web development service icon'/>
                        <h3>Web Development</h3>
                        <p>
                            Our team will develop your business website from front-end to back-end, 
                            covering using standard web technologies such as HTML/CSS, JavaScript, React, Node.js, 
                            Express.js, mongoDB, AWS etc.
                        </p>
                    </div>
                    <div className='card'>
                        <img src={promoicon} alt="Digital Marketing Service Icon"/>
                        <h3>Digital Marketing</h3>
                        <p>
                            With our immersive technical background in the digital technology, we will handle all your online 
                            marketing needs developing a wining strategy, content creation, and following up with management and analytics.
                        </p>
                    </div>

                    <div className='card'>
                        <img src={mouseicon} alt="Computer Services Icon"/>
                         <h3>Computer Services</h3>
                        <p>
                           Our computer services include hardware repair & servicing, networking, Os and desktop applications etc. 
                        </p>
                    </div>

                     <div className='card'>
                        <img src={presentationicon} alt='Training & Consultancy service icon'/>
                        <h3>Training & Consultancy</h3>
                        <p>
                        We offer coporate and non-corporate training as well as consultancy for businesses &
                        organizationscat any size, operating across the manufacturing industry, healthcare, education
                        retail etc.
                        </p>
                </div>
                
                 <div className='card'>
                        <img src={devicon} alt='web development service icon'/>
                        <h3>Software Development</h3>
                        <p>
                        Our team of highly sought after developers will solve any business problem offering your 
                        outfit only worldclass software solutions.
                        </p>
                </div>
                
                </div>
            </div>
            <div className='pannel-header'>&nbsp;</div>
             </div>

           
       
        
    )
}

export default Cardpanel