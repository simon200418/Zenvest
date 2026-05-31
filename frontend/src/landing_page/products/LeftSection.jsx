import React from 'react'

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className='container'>
      <div className="row text-muted">
        <div className="col-5 p-5">
          <img src={imageUrl} alt="Product Image" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className='mt-3'>{productDescription}</p>
          <div className='mt-3'>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i> </a>
            <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i> </a>
          </div>

          <div className='mt-3'>
            <a href={googlePlay}><img src="media/Images/googlePlayBadge.svg" alt="Playstore" /></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media/Images/appstoreBadge.svg" alt="AppStore" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
