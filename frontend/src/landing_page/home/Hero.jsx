import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
        <div className="row text-center">
            <img src="media/Images/homeHero.png" alt="Hero Image" className='mb'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <button className='mb-5 p-2 fs-5 btn btn-primary' style={{width:"20%",margin: "0 auto"}}>Signup for free</button>
        </div>
    </div>
  )
}

export default Hero
