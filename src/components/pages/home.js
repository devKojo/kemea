
import Nav from '../nav';
import Jumbotron from '../jumbotron';
import Cardpanel from '../card-panel';
import Footer from '../footer';


function Home() {
    
    return (
        <div className='main-container'>
            <Nav/> 
           <Jumbotron />
            <Cardpanel />
          <Footer />
            </div>
    )
}


export default Home();



