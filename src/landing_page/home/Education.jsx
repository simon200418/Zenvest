import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        
        <div className="col-6">
          <img src="media/Images/education.svg" alt="Education Image" style={{width:"75%"}} />  
        </div>

        <div className="col-6">
          <h1 className='mb-4 fs-4'>Free and open market education</h1>
          <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
          
          <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href=""  style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>  
        
        </div>
      </div>
    </div>
  )
}

export default Education
