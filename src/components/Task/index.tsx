import React from 'react';
import {MdAdd} from 'react-icons/md'
import { CardsEntity } from '../../types/types';
import { Container, Color } from './styles';

export default function Task( props: {Taskprops: CardsEntity}) {
  console.log(props)
  return (
    <Container>
        <header>
          <h3>{props.Taskprops.content}</h3>
        </header>
            {props.Taskprops.labels?.map(label => <Color 
            key={label.text} color={label.color}>
              {label.text}</Color>)}
            
             
    </Container>
  );
}