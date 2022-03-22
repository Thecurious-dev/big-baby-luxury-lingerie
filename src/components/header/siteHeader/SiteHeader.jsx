import React from 'react'
import {  OptionLink, RightNav, SearchBar, SiteLogo } from './SiteHeader.styles'

const SiteHeadr = () => {
  return (
    <header style={{position: 'relative',padding: '8px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-12 d-none">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.3 17.9" ecl="true">
                          <defs ecl="true"></defs>
                          <path d="M0 1.2h14v1.5H0zM0 6.2h12v1.5H0zM0 11.2h14v1.5H0zM0 16.2h18v1.5H0zM28.5 13c.5-.4.9-.8 1.2-1.3 1.1-1.6 1.6-3.6 1.3-5.5-.3-1.9-1.4-3.6-3-4.8C26.4.3 24.4-.2 22.5.1c-4 .7-6.7 4.5-6 8.5.3 1.9 1.4 3.6 3 4.8 1.3.9 2.7 1.4 4.3 1.4.4 0 .8 0 1.2-.1.8-.1 1.6-.4 2.3-.8l2.8 4.1 1.2-.9-2.8-4.1zm-3.8.2c-1.5.3-3.1-.1-4.4-1-1.3-.9-2.1-2.3-2.4-3.8-.5-3.2 1.6-6.2 4.8-6.8.3-.1.7-.1 1-.1 2.8 0 5.3 2 5.8 4.9.3 1.5-.1 3.1-1 4.4-.9 1.3-2.2 2.1-3.8 2.4z" ecl="true"></path>
                      </svg>
                </div>
                <div className="col">
                  <SearchBar>
                    <svg
                    style={{marginRight: '1.5rem',
                            background: 'none'
                    }} 
                    width="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-search" ecl="true">
                      <path d="M12.5 13C13 12.6 13.4 12.2 13.7 11.7C14.8 10.1 15.3 8.09999 15 6.19999C14.7 4.29999 13.6 2.59999 12 1.39999C10.4 0.299994 8.40002 -0.200006 6.50002 0.0999937C2.50002 0.799994 -0.199978 4.59999 0.500022 8.59999C0.800022 10.5 1.90002 12.2 3.50002 13.4C4.80002 14.3 6.20002 14.8 7.80002 14.8C8.20002 14.8 8.60002 14.8 9.00002 14.7C9.80002 14.6 10.6 14.3 11.3 13.9L14.1 18L15.3 17.1L12.5 13ZM8.70002 13.2C7.20002 13.5 5.60002 13.1 4.30002 12.2C3.00002 11.3 2.20002 9.89999 1.90002 8.39999C1.40002 5.19999 3.50002 2.19999 6.70002 1.59999C7.00002 1.49999 7.40002 1.49999 7.70002 1.49999C10.5 1.49999 13 3.49999 13.5 6.39999C13.8 7.89999 13.4 9.49999 12.5 10.8C11.6 12.1 10.3 12.9 8.70002 13.2Z" fill="black" ecl="true"></path>
                    </svg>
                    <input type="search" name="" id="" placeholder='search....' />
                  </SearchBar>

                </div>
                <div className="col">
                  <SiteLogo to='/'>
                    <span>B'baby Luxury Lingerie</span>
                  </SiteLogo>
                </div>
                <div className="col">
                  <RightNav>
                    <OptionLink>sign in</OptionLink>
                    <OptionLink>help</OptionLink>
                    <OptionLink>wishlist
                     (<span>0</span>)
                    </OptionLink>

                  </RightNav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default SiteHeadr