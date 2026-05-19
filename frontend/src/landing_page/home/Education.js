import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6'>
                    <div className='row text-center'>
                        <img src='media/images/education.svg' style={{width:"75%"}}></img>
                    </div>
                </div>
                <div className='col-6'>
                    <h3 className='mb-4'> Free and Open Market Education</h3>
                    <p className='text-muted fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='fs-5.5'style={{textDecoration:"none"}}>Varsity  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <p className='text-muted fs-5 mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='fs-5.5 mb-3'style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;