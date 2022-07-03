import React from 'react';
import {MdAdd} from 'react-icons/md'
import { Container, Color } from './styles';

const Task: React.FC = () => {
  return (
    <Container>
        <header>
          <h3>Erro de design</h3>
        </header>
            <Color color="#eee">
              Task 1
            </Color>
    </Container>
  );
}

export default Task;