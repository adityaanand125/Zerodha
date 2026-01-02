import React from 'react'

function EDucation() {
    return ( 
        <div className='container mt-5'>
<div className='row'>
    <div className='col-6'>
        <img src='media\education.svg'/>
    </div>
    <div className='col-6'>
        <h1 className='mb-3'> Free and open market education </h1>
        <p>
            Varsity, the largest online stoke  market education book in the world covering everything from the basics to advanced trading.
        </p>
        <a href='' style={{textDecoration:"none"}}>Versity <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>
        <p>
            Trading Q&A, the most active trading and invesment community in India for all market related querise.
            
            </p> 
            <a href='' style={{textDecoration:"none"}}>TradingQ&A <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a> 
    </div>
</div>
        </div>
     );
}

export default EDucation;