import React from 'react';


import Directory from '../../components/directory/Directory';
import MediaScroller from '../../components/media-scroller/MediaScroller';
import { Container } from './Homepage.styles';


const Homepage = () => {
  return (
      <Container
      >
        <Directory/>
        <MediaScroller/>
{/*         
        <ShopifySectionTwo/>
        <FeatureSection/>
        <ShopifySectionThree/> */}
      </Container>
   
  )
}

export default Homepage