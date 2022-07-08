import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loadLists } from '../../services/api';
import { KanbanPageFunctionProps, ListData } from '../../types/types';
import DropList from '../DropList/Index';
import moveTo from 'immer'
import { Container, CreateNewList } from './styles';
import moveContext from './moveContext';
import { AiOutlinePlus } from 'react-icons/ai';

function Board({ onOpenNewTaskModal, onOpenNewListBoxModal }: KanbanPageFunctionProps) {

  const data = loadLists()
  const [list, setList] = useState(data.res)
  
  
  function move(fromList: number ,from: string, to: string){

    if(list === null)
    return console.error('ih não entrou');
    

    setList(moveTo(list, draft => {
      const dragged = draft[fromList].cards[from]
      debugger
      
      draft[fromList].cards.splice(from,1)
      draft[fromList].cards.splice(to, 0, dragged)
      // draft esta retornando null, não esta colocando o novo card dentro
      console.log(draft)

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
      <div className="DropList">
        {list.map((list, index: number) => <DropList 
         onOpenNewListBoxModal={onOpenNewListBoxModal}
        index={index} listprops={list} key={list.title} /> )}
        </div>
     <CreateNewList onClick={onOpenNewListBoxModal}>
     <AiOutlinePlus className='plus-icon'/>
      Criar list box
      </CreateNewList>
    </Container>
    </moveContext.Provider>
  );
}
}

export default Board;