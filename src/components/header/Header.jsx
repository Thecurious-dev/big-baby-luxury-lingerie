import React from 'react'
import { Outlet } from 'react-router-dom'
import ModalComponent from './headerTop/HeaderTop.styles'
import MegaMenu from './megaMenu/MegaMenu'
import SiteHeadr from './siteHeader/SiteHeader'

const Header = () => {
  return (
    <>
    <ModalComponent/>
    <SiteHeadr/>
    <MegaMenu/>

    <Outlet/>
    </>
  )
}

export default Header