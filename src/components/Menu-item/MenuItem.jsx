import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.styles'
import { BackgroundImageContainer, Button, Container, Content, Title } from './MenuItem.styles';



const MenuItem = ({ item:{title, imageUrl, size,linkUrl},history,match }) => {
  const navigate = useNavigate()
  return (
        <Container
        size={size}
    onClick={() => navigate(`${match.path}${linkUrl}`)}
       
         >
        <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
        />
        <Content className='content'>
        <Title>{title.toUpperCase()}</Title>
        <Button>SHOP NOW</Button>
        </Content>
    </Container>
  );
};

export default   MenuItem;
