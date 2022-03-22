import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const SearchBar= styled.form`
    max-width: 300px;

    display: flex;
    pointer-events: auto;
    position: relative;
    margin-bottom: 0;
    
    /* display: flex;
    max-width: 400px;
    width: 100%; */

    input{
    border: none;
    border-bottom: 1px solid #d9d9d9; 
    padding: 0.75rem 0;
    margin: 0;
    background: transparent;
    outline: none;
    font-family: Lato,sans-serif;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: .4px;
    max-width: 100%;
    border-radius: 0;
    width: 100%; 
    }
`;


export const SiteLogo = styled(Link)`
    margin: 4px auto 0;
    max-height: 40px;
    width: 285px;

    span{
        max-height: 30px;
        font-size: 2rem;
    }
`;

export const RightNav= styled.ul`
    display: flex;
    justify-content: flex-end;
`;

export const OptionLink= styled.div`
    font-size: 11px;
    letter-spacing: 0.4px;
    padding: 10px 10px;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    &::before{
        content: "";
        height: 12px;
        width: 1px;
        position: absolute;
        background: #000;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

    }
    &:last-child::before {
    display: none;
    }
`