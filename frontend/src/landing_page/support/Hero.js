import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href='' id='supportAnchor'>Track Tickets</a>
            </div>
            <div className='row p-3 '>
                <div className='col p-5 '>
                    <h2 className='mb-4'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg. how do I activate F&O, why is my order getting rejected...' className='mb-4'></input><br/>
                    <a href=''>Track Account Opening</a>{" "}
                    <a href=''>Track segment activation</a>{" "}
                    <a href=''>Intraday Margins</a>{" "}
                    <a href=''>Kite User Manual</a>
                </div>
                <div className='col p-5'>
                    <h2 className='mb-4'>Featured</h2>
                    <ol>
                        <li>
                            <a href=''>Current Takeovers and Delisting- January 2026</a>
                        </li>
                        <li>
                            <a href=''>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;