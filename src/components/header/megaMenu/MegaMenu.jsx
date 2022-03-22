import React from 'react'
import styled from 'styled-components';


const MegaMenu = () => {
  return (
    <nav class="navbar navbar-expand-lg   container">
    <div class="container  d-flex justify-content-center">
        <ul class="navbar-nav" >
			<li class="nav-item"><a class="nav-link" href="#"> sale </a></li>
			<li class="nav-item"><a class="nav-link" href="#"> new in </a></li>
            
         
          <li class="nav-item dropdown " style={{position:'static'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              lingerie
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{left:'0', right:'0', width:'100%', marginTop:'0'}}>
               <div className="container">
                   <div className="row">
                   <h3>inspiration</h3>

                     <div className="col-5 d-flex">
                         
                            <ul>
                                <li><a class="dropdown-item" href="#">new in</a></li>
                                <li><a class="dropdown-item" href="#">bras </a></li>
                                <li><a class="dropdown-item" href="#">knickers</a></li>
                            </ul>
                            <ul>
                                <li><a class="dropdown-item" href="#">new in</a></li>
                                <li><a class="dropdown-item" href="#">bras </a></li>
                                <li><a class="dropdown-item" href="#">knickers</a></li>
                            </ul>
                
                        </div>
                        <div className="col-7">
                            <a href="">
                                <img style={{objectFit:'contain'}} src="https://cdn.shopify.com/s/files/1/1169/7228/files/Fresh-Spin-Nav-Lingerie_620x.png?v=1646838534" alt="" />
                            </a>
                        </div>
                   </div>
               </div>
               
               

              
             
            </ul>
          </li>
          <li class="nav-item dropdown " style={{position:'static'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              DD+
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{left:'0', right:'0', width:'100%', marginTop:'0'}}>
              <li><a class="dropdown-item" href="#">lingerie set</a></li>
              <li><a class="dropdown-item" href="#"> bras</a></li>
              <li><a class="dropdown-item" href="#">body & basques</a></li>
             
            </ul>
          </li>
          <li class="nav-item dropdown " style={{position:'static'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              nightware
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{left:'0', right:'0', width:'100%', marginTop:'0'}}>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
             
            </ul>
          </li>
          <li class="nav-item dropdown " style={{position:'static'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              gift
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{left:'0', right:'0', width:'100%', marginTop:'0'}}>
              <li><a class="dropdown-item" href="#">new in</a></li>
              <li><a class="dropdown-item" href="#">chemises</a></li>
              <li><a class="dropdown-item" href="#">kimonos</a></li>
             
            </ul>
          </li>
          <li class="nav-item dropdown " style={{position:'static'}}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              inspiration
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{left:'0', right:'0', width:'100%', marginTop:'0'}}>
              <li><a class="dropdown-item" href="#">provocative set</a></li>
              <li><a class="dropdown-item" href="#">everyday set</a></li>
              <li><a class="dropdown-item" href="#"> lingerie set</a></li>
             
            </ul>
          </li>
        </ul>
       
       
       
      
    </div>
  </nav>
  )
}

export default MegaMenu;

const Dropdown= styled.div`
    &:hover{
        display: flex;
    }
`


