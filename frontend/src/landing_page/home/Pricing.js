import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4'>
                    <h1 className='mb-4'>Unbeatable Pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='fs-5.5 mb-3'style={{textDecoration:"none"}}>See pricing  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border p-3'>
                            <h1><i class="fa fa-inr fs-2" aria-hidden="true"></i>0</h1>
                            <p className='text-muted'>Free Account Opening</p>
                        </div>
                        <div className='col border p-3'>
                            <h1><i class="fa fa-inr fs-2" aria-hidden="true"></i>0</h1>
                            <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-3'>
                            <h1><i class="fa fa-inr fs-2" aria-hidden="true"></i>20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;