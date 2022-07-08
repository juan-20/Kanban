import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { KanbanPageFunctionProps, ResEntity } from '../../types/types';
import Task from '../Task';


import { Container } from './styles';

export default function DropList(props: {listprops: ResEntity, index: number, onOpenNewListBoxModal: () => void},) {
  return (
    <Container color={props.listprops.color}>
        <header>
          <h1>{props.listprops.title}</h1>
        </header>
        <ul>
          {props.listprops.cards?.map((card, index) => <Task
           index={index} Taskprops={card} listIndex={index} />)}
            
        </ul>

        <button onClick={props.onOpenNewListBoxModal} type='button'>
            <MdAdd size={24}  />
            <p>Adicionar outro cartão</p>
        </button>
    </Container>
  );
}