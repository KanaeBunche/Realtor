import './HomeStyle.css';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react'
import './rent.css'



function Rent() {



  return (
    <div id="rent" className='rent-container'>
    <little className="verytiny">You are wanted here<br></br> </little>
    <little className="tiny">Your pace your time</little>
  <h1 className='rbuytitle '>Renting Steps</h1> 
  

<p className='rsteps'>Steps</p>
<ul className="rsteps5">
  <p className='rstep'> <span className="num">1</span> Intake Form<Link to='/intake-form' className='rlink'>Form</Link></p>
  <p className='rstep'> <span className="num">3</span> Property Search
  <p className='rstep four'> <span className="num">4</span> Upload Documents</p><Link to='/documents-upload' className='rlink'>Form</Link></p>
  <p className='rstep four'> <span className="num">5</span> Viewing </p><Link to='/viewing-date' className='rlink'>Form</Link>
  <p className='rstep four'> <span className="num">6</span> Apply </p>
  <p className='rstep four'> <span className="num">7</span> Sign the Lease </p>

</ul>

  

  </div>
  )
}

export default Rent;