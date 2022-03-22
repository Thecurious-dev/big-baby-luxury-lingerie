import React from 'react';


import Directory from '../../components/directory/Directory';
import FeatureSection from '../../components/featureSection/FeatureSection';
import Footer from '../../components/footer/Footer';
import MediaScroller from '../../components/media-scroller/MediaScroller';
import { Container } from './Homepage.styles';


const Homepage = () => {
  return (
      <Container
      >
        <Directory/>
        <MediaScroller/>
         <FeatureSection/>
         <Footer/>
         
        {/* <ShopifySectionTwo/> */}
        {/* <ShopifySectionThree/>  */}
      </Container>
   
  )
}

export default Homepage