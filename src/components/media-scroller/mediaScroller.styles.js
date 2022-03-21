import styled from "styled-components";

export const MediaScrollerContainer= styled.div`
    display: grid;
    gap: 1rem;
    grid-auto-flow:column;
    grid-auto-columns: 21%;
    padding:0 0.5rem;

    
    overflow-x: auto;
    overscroll-behavior-inline: contain;

    &.snaps-inline{
        scroll-snap-type:inline mandatory;
        scroll-padding-inline: 1rem;
    };

    &.snaps-inline > *{
        scroll-snap-align:start ;
    }
`;
export const Header = styled.div`
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
`;
export const MediaElement= styled.div`
    display: grid;
    grid-template-rows:min-content;
    gap: 1rem;
    padding:0.5rem;
    border-radius: 2px;
    
    img{
        inline-size: 100%;
        aspect-ratio: 10/9;
        object-fit: cover;
    }
`;
export const NameContainer = styled.h6`
  text-align: center;
  font-family: Lato,sans-serif;
  font-size: 13px;
  letter-spacing: 1.4px;   
    font-weight: 400;
  color: #000;
  line-height: 110%;
  text-transform: uppercase;
  margin: 0 0 12px;
  
`;
export const PriceContainer= styled.p`
    color: #979998;
   cursor: pointer;
   font-family: Lato,sans-serif;
  font-size: 13px;
  letter-spacing: 1.4px;   
    font-weight: 400;
  line-height: 110%;
  text-transform: uppercase;
  margin: 0 0 12px;
  text-align: center;
`