import React from 'react';
import { MdAdd } from 'react-icons/md';
import Task from '../Task';

import { Container } from './styles';

const DropList: React.FC = () => {
  return (
    <Container>
        <header>
          <h1> 📝  To Do </h1>
        </header>

        <ul>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </ul>

        <button type='button'>
            <MdAdd size={24}  />
            <p>Adicionar outro cartão</p>
        </button>
    </Container>
  );
}

export default DropList;