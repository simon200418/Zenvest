import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className='col-6 p-5'>
            <img src="media/Images/largestBroker.svg" alt="Largest Broker"/>
        </div>
        <div className='col-6 p-5 mt-5'>
            <h1>Largest Stock Broker in India</h1>
            <p>2+ million  Zerodha clients contribute to over 15% of allthe volumes in India daily by trading and investing in: </p>
            <div className="row mt-5">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future & Options</p>
                  </li>
                  <li>
                    <p>Commodity Derivatives</p>
                  </li>
                  <li>
                    <p>Currency Derivatives</p>
                  </li> 
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct Mutual Funds</p>
                  </li>
                  <li>
                    <p>Bonds & Govt. Securties</p>
                  </li> 
                </ul>
              </div>
            </div>
            <img src="media/Images/pressLogos.png" alt="Press Logos" style={{width:"90%"}}/>
        </div>
      </div>
    </div>

  )
}

export default Awards
