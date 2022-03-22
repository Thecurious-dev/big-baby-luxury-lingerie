import React from 'react'
import { slider_products } from '../../data'
import { Header, MediaElement, MediaScrollerContainer, NameContainer, PriceContainer } from './mediaScroller.styles'


const MediaScroller = () => {
  return (
<div>
        <Header>
                <h3>bestsellers</h3>
        </Header>
        <MediaScrollerContainer className='snaps-inline'>
       

        {slider_products.map(product =>
            <MediaElement key={product.id} product={product}>
                <img src={product.imageUrl} alt=''/>
                <NameContainer>{product.name}</NameContainer>
                <PriceContainer>&#8358;{product.price}.00</PriceContainer>
            </MediaElement>
        )}
       
        
    </MediaScrollerContainer>
</div>

    
  )
}

export default MediaScroller