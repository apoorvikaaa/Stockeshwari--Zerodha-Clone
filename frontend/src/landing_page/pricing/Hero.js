import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mt-5'>
                <h2>Charges</h2>
                <h4 className='text-muted mt-2'>List of all charges and taxes</h4>
            </div>
            <div className='row text-center mt-5 pt-5'>
                <div className='col p-3'>
                    <img src='media/images/pricing0.svg' style={{width:"70%"}}></img>
                    <h2 className='mt-3'>Free equity delivery</h2>
                    <p className='fs-5 mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-3'>
                    <img src='media/images/intradayTrades.svg' style={{width:"70%"}}></img>
                    <h2 className='mt-3'>Intraday and F&O trades</h2>
                    <p className='fs-5 mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-3'>
                    <img src='media/images/pricing0.svg' style={{width:"70%"}}></img>
                    <h2 className='mt-3'>Free direct MF</h2>
                    <p className='fs-5 mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;