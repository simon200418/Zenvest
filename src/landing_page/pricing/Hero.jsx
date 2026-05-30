import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
        <div className="row p-5 mt-5 border-bottom text-center">
            <h1 className='mt-3'>Pricing</h1>
            <h3 className='mt-3 text-muted fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h3>
        </div>

        <div className='row p-5 mt-5 text-center'>
            <div className="col-4">
              <img src="media/Images/pricingEquity.svg" alt="Princing Equity" />
              <h1 style={{fontSize: "1.75rem" , lineHeight: "1.6"}}>Free Equity Delivery</h1>
              <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4">
              <img src="media/Images/intradayTrades.svg" alt="Princing Equity" />
              <h1 style={{fontSize: "1.75rem" , lineHeight: "1.6"}}>Intraday and F&O trades</h1>
              <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
              <img src="media/Images/pricingEquity.svg" alt="Princing Equity" />
              <h1 style={{fontSize: "1.75rem" , lineHeight: "1.6"}}>Free direct MF</h1>
              <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
