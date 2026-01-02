import React from 'react'

function Universe() {
    return (
        <div className='container mt-5 '>
            <div className='text-center row mt-5'>
                <h1>
                    The Zoradha Universe
                </h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className=' col-4 p-3 mt-5 '>
                    <img src='media/smallcaseLogo.png' style={{ width: "50%" }} />
                    <p className='text-muted mt-2 text small'> Thematic investment platform</p>
                </div>

                <div className=' col-4 p-3 mt-5'>
                    <img src='media/streakLogo.png' style={{ width: "50%" }} />
                    <p className='text-muted mt-2 text small'> Algo & strategy platfrom</p>
                </div>

                <div className=' col-4 p-3 mt-5'>
                    <img src='media/sensibullLogo.svg' style={{ width: "50%" }} />
                    <p className='text-muted mt-2 text small'> Option trading platfrom</p>
                </div>

               <div className=' col-4 p-3 mt-5'>
                    <img src='media/zerodhafundhouse.png' style={{ width: "50%" }} />
                    <p className='text-muted mt-2 text small'> Asset management</p>
                </div>

                <div className=' col-4 p-3 mt-5'>
                    <img src='media/goldenpiLogo.png' style={{ width: "50%" }} />
                    <p className='text-muted mt-2 text small'> Bonds trading platfrom</p>
                </div>

                <div className=' col-4 p-3 mt-5'>
                    <img src='media/dittoLogo.png' style={{ width: "50%" }} />
                    <p className='text-muted text small mt-2'> Insurance</p>
                </div>
                <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>

            </div>


        </div>
    );
}

export default Universe;