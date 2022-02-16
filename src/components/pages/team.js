import Footer from "../footer";
import Navwhite from "../nav white";


function Team() {
    
    return (
        <div>
            <div className='about-header'>
        <Navwhite/>
        </div>
        <div className="head">
                <h1>KEMEA / TEAM</h1>
            </div>
             <div>
                <p>&nbsp;</p>

                <div className="container">
                    <div>
                        <h4>General Manager</h4>
                    </div>
                    <div>
                         <h4>Operations Manager</h4>
                    </div>
                    <div>
                         <h4>Account Officer</h4>
                    </div>
                     <div>
                         <h4>IT Officer</h4>
                    </div>
                    <div>
                        <h4>IT Technician</h4>
                    </div>
                </div>
                </div>


                <p>&nbsp;</p>
             <Footer/>
            </div>
    )
}

export default Team();