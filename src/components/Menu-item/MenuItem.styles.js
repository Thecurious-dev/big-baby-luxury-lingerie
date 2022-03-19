import styled from "styled-components";


export const Container = styled.div`
height: ${({ size }) => (size ? '780px' : '540px')};
min-width:  ${({ size }) => (size ? '40%' : '30%')};
overflow:hidden;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
&:first-child, :nth-child(2){
    .content{
        display: none;
    }
}



&:hover {
        cursor: pointer;
        
        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & .content {
            opacity: 0.9;
        }
    }
     &:first-child {
     margin-right: 7.5px;
     }
     &:last-child {
     margin-left: 7.5px;
     }

`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    background-color: transparent;
    position: absolute;
   
`;

export const Title = styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 24px;
    color: #fff;
    letter-spacing: 2px;
    line-height: 110%; 
    margin: 0 0 15px;
`;
export const Button = styled.button`
   color: #fff;
    border: 1px solid #fff;
     padding: 0.5rem 20px;
     background-color: transparent; 
    font-weight: 700;
    letter-spacing: 1px;
     font-size: 14px;
      min-height: 40px;
       text-transform:uppercase;
       
     
`;
