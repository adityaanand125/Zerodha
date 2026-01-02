import React from 'react'

function Awards() {
    return (
        <div className=' container mt-5 '>
            <div className='row mt-5'>
                <div className='col-6 '>
                    <img src='media/largestBroker.svg' />

                </div>
                <div className='col-6 p-5 mt-3'>
                    <h2>Largest stock broker in india</h2>
                    <p className=''>
                        2+million Zerodha contribute to over 15% of all retail order volumes in india daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future and Option</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency devivaties</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                            
                        </div>
                    </div>
                    <img src='media\pressLogos.png' style={{width: "90%"}}/>
                    
                </div>

            </div>

        </div>
    );
}

export default Awards;