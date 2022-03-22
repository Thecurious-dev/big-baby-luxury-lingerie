import React from 'react'

const FeatureSection = () => {
  return (
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <figure class="figure">
                    <img src="https://cdn.shopify.com/s/files/1/1169/7228/files/christmas_block-uk_620x.png?v=1641830651" class="figure-img img-fluid rounded" alt="..."/>
                </figure>
            </div>
            <div class="col-md-6 col-sm-12">
                <figure class="figure">
                    <img src="https://cdn.shopify.com/s/files/1/1169/7228/files/giftwrap-en_9ea4e0a7-1927-46ab-a874-1486bd5e078b_620x.png?v=1642670634" class="figure-img img-fluid rounded" alt="..."/>
                </figure>
            </div>
          
        </div>
        <div style={{backgroundColor:"#DDDDDD", textAlign:"center", padding: "40px",marginBottom: "30px"}}>
                <h3 className="delivery-title" style={{fontFamily: "ChronicleDisplay-Roman",fonWweight: "400",     fontSize: "24px",
                    letterSpacing: "2px",
                        lineHeight: "110%",
                        textTransform: "uppercase",
                        margin: "0 0 15px"}}
                >
                    FREE DELIVERY & RETURNS
                </h3>
                <a style={{marginTop: "56px", backgroundolor: "transparent",
                    border: "1px solid #000", padding: "0.5rem 20px", fontSize: "14px", textTransform:"uppercase",background: "transparent",
                    minHeight: "40px"}} href="//">delivery information
                </a>
            </div>
    </div>
  )
}

export default FeatureSection