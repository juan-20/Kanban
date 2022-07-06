import React from 'react';
import { MdAdd } from 'react-icons/md';
import { ResEntity } from '../../types/types';
import Task from '../Task';

import { Container } from './styles';

export default function DropList(props: {listprops: ResEntity}) {
  return (
    <Container color={props.listprops.color}>
        <header>
          <h1>{props.listprops.title}</h1>
        </header>

        <ul>
          {props.listprops.cards?.map((card, index) => <Task index={index} Taskprops={card} key={card.id}  />)}
        </ul>

        <button type='button'>
            <MdAdd size={24}  />
            <p>Adicionar outro cartão</p>
        </button>
    </Container>
  );
}