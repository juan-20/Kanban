import React from 'react';
import DropList from '../DropList/Index';
import Task from '../Task';

import { Container } from './styles';

const Board: React.FC = () => {
  return (
    <Container>
        <DropList />
    </Container>
  );
}

export default Board;