import React from 'react'
import './buy.css';
import { Link } from 'react-router-dom';

function Buy() {
  return (
   <div id="buy" className='buy-container'>
    <little className="verytiny">You are wanted here<br></br> </little>
    <little className="tiny">Your pace your time</little>
  <h1 className='rbuytitle '>Buying Steps</h1> 
  

<p className='steps'>Steps</p>
<ul className="steps5">
  <p className='step'> <span className="num">1</span>Get pre-approved</p>
  <p className='step'> <span className="num">2</span>Hire A Buyers Agent</p>
  <p className='step'> <span className="num">3</span>Showings</p>
  <p className='step'> <span className="num">4</span>Offer and Contract</p>
  <p className='step'> <span className="num">5</span>Walk Through and Closing</p>
  <Link to="/buying-form" className='buys'> Please fill out <br></br> Form</Link>
</ul>

  

  </div>
  )
}

export default Buy