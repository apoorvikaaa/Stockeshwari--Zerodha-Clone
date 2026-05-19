import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-4'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-2 mt-5 '>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million Stockeshwari clients contribute to over 15% of all volumes of in India daily by trading and investing in:</p>
                    <div className='row p-3 '>
                        <div className='col-6 '>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"80%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;