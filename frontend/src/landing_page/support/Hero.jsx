import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid" id="SupportHero" >
      <div className="p-4 mt-4" id="supportWrapper">
        <h3 className='fs-3'>Support Portal</h3>
        <a href="" style={{textDecoration:"none" , color:"white"}}>Track Tickets</a>
      </div>

      <div className="row p-4 ">
        <div className="col-6 p-3 ">
            <h1>Search for an answer or browse help topics to create a ticket</h1>
            <input type="text" name="" id="" placeholder='Eg. how to activate F&O' /> <br />
            <a className='mx-2' href="">Track Account Opening</a>
            <a className='mx-2' href="">Track Segment activation</a>
            <a className='mx-2' href="">Intraday Margins</a>
            <a className='mx-2' href="">Kite User Manual</a>
        </div>
        
        <div className="col-6 p-4">
          <h1 className='fs-3'>Features</h1>
          <ol>
            <li><a className='mx-2' href="">Current Takeovers and Delighting - January 2026</a></li>
            <li><a className='mx-2' href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>

        
      </div>
    </section>
  )
}

export default Hero
