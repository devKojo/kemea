import Footer from "../footer";
import Navwhite from "../nav white";



function About() {
    
    return (
         <div>
        <div className='about-header'>
           <Navwhite/>
             </div>
       
            <div  className="head">
                <h1>KEMEA / ABOUT</h1>
            </div>
            <div>
                <p className="txt-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Facere ipsa voluptatum optio exercitationem quo fugiat, aut vero tenetur,<br/>
                    earum illo iure eveniet quidem blanditiis corporis,<br/>
                    repud
                    </p>
                    <p>&nbsp;</p>
            </div>
            <Footer/>
        </div>
    )
}

export default About();