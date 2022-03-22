import React from 'react'


const ModalComponent = () => {
  return (
    <div>
        <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
               United Kingdom 
             </button>
             <div className="modal fade  " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="modal-header   ">
                     <h1 className="modal-title  mx-auto  text-dark" id="staticBackdropLabel">BLUEBELLA</h1>
                     <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div className="modal-body   ">
                      <p style={{fontSize: "17px", padding: "30px",    letterSpacing: ".4px",color: "#000"   , 
                       fontWeight: "700", textAlign: "center"}}>
                        Let us help - choose your country of residence below, and we'll show you the correct prices,
                        delivery times and shipping costs.
                      </p>
                      <p style={{ fontSize: "17px",marginBottom: "30px",  fontWeight: "900",textAlign: "center",
                        margin: "0 auto 20px", letterSpacing: ".4px",color: "#000"}}>Choose between
                      </p>
                      <div className="row">
                        <div className="col">
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />

                        </div>
                        <div className="col">
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                          <img style={{height:"15px", width:"40px", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/flag-GB.png?v=2663238392930051278" alt="flag" />
                        </div>
                      </div>
                   </div>
            
                 </div>
               </div>
             </div>
    </div>
  )
}

export default  ModalComponent
