import styled from "styled-components";

export const FooterContainer = styled.div`
     text-align: center;
    width: 100%;
    position: relative;
    margin: 40px 0;

    h3{
        background: #fff;
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0 50px;
    z-index: 1;
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 110%;
    text-transform: uppercase;
    }
    &::before{
        content: "";
    background: #dddddd;
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    }
    
   

    img{
        background: #fff;
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0 50px;
    z-index: 1;
    width: 150px;
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 110%;
    text-transform: uppercase;
    }
   

`