import '../main.css';

function Jumbotron() {
    
    return (
        <div className="jumbotron">
            <div className='heading-card'>
                <h1><strong>Your #1 <br />IT Solutions Provider</strong></h1>
                <p align="center" className='subtitle'><i>
                Choose us for quality & affordable services in:</i>
                </p>
                <p><ul className='listing'>
                    <li className="list-1">&rarr; &nbsp;WEB DEVELOPMENT</li>
                    <li  className="list-2">&rarr; &nbsp;Digital Marketing</li>
                    <li  className="list-3">&rarr; &nbsp;Computer Services</li>
                    <li  className="list-4">&rarr; &nbsp;Training & Consultancy</li>
                    </ul>
                </p>
                <button className='btn-more'>SEE NOW &#8250;</button>
            </div>
                </div>
    )
}


export default Jumbotron;