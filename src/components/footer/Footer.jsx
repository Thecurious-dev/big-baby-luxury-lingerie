import React from 'react'
import { FooterContainer } from './Footer.styles'


const Footer = () => {
  return (
        <div className='container'>
            <FooterContainer>
              <img src="https://cdn.shopify.com/s/files/1/1169/7228/t/75/assets/bluebella_logo.png?v=762874329588494623"  alt="" />
            </FooterContainer>
            <div className='row text-center' style={{fontFamily:" ChronicleDisplay-Roman",fontWeight: "400",lineHeight: "1.1"}}>
            <div className="col-lg-4 col-12">
                <h3>Useful Links</h3>
                <div><a href="#">Gift Wrap Service</a></div>
                <div><a href="#">Contact Us</a></div>
                <div><a href="#">Store Locator</a></div>
                <div><a href="#">Help &amp; Faqs</a></div>
                <div><a href="#">Size Guide</a></div>
                <div><a href="#">Fit Guide</a></div>
                <div><a href="#">Ordering & Payment</a></div>
                <div><a href="#">Paying With Klarna</a></div>
                <div><a href="#">Delivery Details</a></div>
                <div><a href="#">Returns & Exchanges</a></div>
                <div><a href="#">Terms & Conditions</a></div>
                <div><a href="#">Security & Privacy</a></div>
                <div><a href="#">Cookies</a></div>
            </div>
            <div className="col-lg-4 col-12">
                <h3>STAY CONNECTED</h3>
                <p className='my-5'>Never miss out again. Sign up for exclusive news and offers.</p>
                <div className='my-5'>
                    <div class="d-flex mb-3">
                        <input type="text" class="form-control " placeholder="Email address"/>
                        <button class="btn bg-dark text-white" type="button" id="button-addon2">Register</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <h3>Our World</h3>
            <div><a href=''>ABOUT US</a></div>
            <div><a href=''>SUSTAINABILITY</a></div>
            <div><a href=''>INCLUSIVITY, DIVERSITY, EQUALITY & ACTION</a></div>
            <div><a href=''>NEW VACANCIES! CAREERS</a></div>
            <div><a href=''>AS SEEN ON</a></div>
            <div><a href=''>AS SEEN IN</a></div>
            <div><a href=''>BLUEBELLA BLOG</a></div>
            <div><a href=''>ON INSTAGRAM</a></div>
            <div><a href=''>STUDENT DISCOUNT</a></div>
            <div><a href=''>AFFILIATES</a></div>
            <div><a href=''>LOG IN / SIGN UP</a></div>
            </div>
        </div>
    </div>
        

    
  )
}

export default Footer