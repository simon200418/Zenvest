import React from 'react'

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,

}) => {
  return (
    <div className='container mt-5'>
      <div className="row text-muted">
        <div className="col-5 p-5 mt-5">
          <h1 className='mt-5'>{productName}</h1>
          <p className='mt-3'>{productDescription}</p>
          <div className='mt-3'>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i> </a>
          </div>

        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <img src={imageUrl} alt="Product Image" />
        </div>
      </div>
    </div>
  )
}

export default RightSection
