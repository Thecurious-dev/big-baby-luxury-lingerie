
import React from 'react';

import MenuItem from '../Menu-item/MenuItem';
import { Container } from './directory.styles';
import { selectSections } from '../../Redux/directory/directory.selectors';
import { useSelector } from 'react-redux';


const Directory = ()=>  {
    const sections = useSelector(selectSections)
        return (
            <Container>
                {sections.map(section =>
                    <MenuItem key={section.id} item={section}/>)}
            </Container>
        );
    
};


export default  Directory;

