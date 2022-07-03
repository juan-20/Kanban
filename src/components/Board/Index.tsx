import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListData } from '../../types/types';
import DropList from '../DropList/Index';

import { Container } from './styles';
let lists: ListData
axios.get('http://localhost:3000/api/list').then(response => {
  lists = response.data.res  
})

const Board: React.FC = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
    <Container>
        {lists.map(list => <DropList listprops={list} key={list.title} /> )}
    </Container>
  );
}
}

export default Board;