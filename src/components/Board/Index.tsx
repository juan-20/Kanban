import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loadLists } from '../../services/api';
import { ListData } from '../../types/types';
import DropList from '../DropList/Index';
import moveTo from 'immer'
import { Container } from './styles';
import moveContext from './moveContext';


const Board: React.FC = () => {

  const data = loadLists()
  const [list, setList] = useState(data.res)
  
  function move(fromList: number ,from: string, to: string){

    if(list === null)
    return console.error('ih não entrou');
    

    setList(moveTo(list, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from,1)
      draft[fromList].cards.splice(to, 0, dragged)

    }))
  }


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
      <moveContext.Provider value={{list, move}}>
    <Container>
        {list.map((list, index: number) => <DropList 
        index={index} listprops={list} key={list.title} /> )}
    </Container>
    </moveContext.Provider>
  );
}
}

export default Board;