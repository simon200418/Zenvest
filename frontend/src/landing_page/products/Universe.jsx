import React from 'react'

const Universe = () => {
  return (
     <div className='container mt-5'>
      <div className="row text-center text-muted">
        <h1>The Zenvest Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        
        
        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/smallcaseLogo.png" alt="Small Case Logo"  />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/streakLogo.png" alt="Small Case Logo"  height={"50px"}/>
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/sensibullLogo.svg" alt="sensibull Logo" height={"50px"}/>
          <p className='text-small text-muted'>Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/zerodhaFundhouse.png" alt="Small Case Logo" height={"50px"} />
          <p className='text-small text-muted'>Asset Management</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/goldenpiLogo.png" alt="Small Case Logo" height={"50px"}/>
          <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
        
        <div className="col-4 p-3 mt-5">
          <img className='mb-3' src="media/Images/dittoLogo.png" alt="Small Case Logo" height={"50px"}/>
          <p className='text-small text-muted'>Insurance</p>
        </div>

        <button className='mb-5 mt-5 p-2 fs-5 btn btn-primary' style={{width:"20%",margin: "0 auto"}}>Signup for free</button>
      </div>
    </div>
  )
}

export default Universe
