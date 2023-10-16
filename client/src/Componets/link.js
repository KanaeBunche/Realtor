import React from 'react'
import './HomeStyle.css';
import './link.css'
import LinkSVG from './estate-5.svg'

function link() {
    const backgroundImageStyle = {
        backgroundImage: `url(${LinkSVG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

return (
    <div id="list">
    <div className="homepage" style={backgroundImageStyle}></div>
    <div className='link-container'>
        <h1 className='linktitle linktitlecenter'> Let me help you <br></br> make your move.</h1>
    <a href="#sell"  className=' link sell'> Sell a Home</a>
    <a href="#buy"  className=' link buy'> Buy a Home</a>
    <a href="#rent"  className=' link list'> List a Home</a>

    
    </div>
    </div>
)
}

export default link