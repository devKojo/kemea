import './main.css';
import reactdom from 'react-dom';
import { Component } from 'react';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Team from './components/pages/team';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


class Index extends Component{

    render() {
           
        return (    
            <div className='main-container'>
                 <BrowserRouter>
                    <Routes>
                        <Route path="/" element={Home} />
                        <Route path="/home" element={Home} />
                        <Route path="/about" element={About} />
                        <Route path="/team" element={Team} />
                         <Route path="/contact" element={Contact}/>
                    </Routes>
                </BrowserRouter>
                </div>
               
        )
    }
}


reactdom.render(<Index/>, document.getElementById('root'))
