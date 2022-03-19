

const INITIAL_STATE ={
    sections: [
        {
          title: 'valentine offer',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1169/7228/files/Bestsellers-BIS-en0_5227f8e7-a0b9-4814-ae30-cd51452d97fc_800x.png?v=1644495623',
          size: 'large',
          id: 1,
          linkUrl: 'shop/bestsellers'
        }, 
        {
          title: 'marsielle',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1169/7228/files/Lulu-en0_a457d80f-7776-4a60-97d6-641bf5f9c3dc_800x.png?v=1646042061',
           size: 'large',
          id: 2,
          linkUrl: 'shop/everyday'
        },
        {
          title: 'lingerie',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1169/7228/files/spotlight-productsnew-in-desktop_406x.jpg?v=1642668158',
          id: 3,
          linkUrl: 'shop/lingerie'
        },
        {
          title: 'nightware',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1169/7228/files/ss22-spotlightnightwear-desktop_406x.png?v=1641830589',
         
          id: 4,
          linkUrl: 'shop/nightware',
          
        },
        {
          title: 'new in',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1169/7228/files/spotlight-productslingerie-desktop_406x.jpg?v=1642668158',
          
          id: 5,
          linkUrl: 'shop/newin'
        }
          
        ]
};


const directoryReducer = (state= INITIAL_STATE, action) =>{
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer;