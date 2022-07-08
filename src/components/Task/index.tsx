import React, { useRef, useState, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CardsEntity } from '../../types/types';
import { Container, Color } from './styles';
import moveContext from '../Board/moveContext';
import {AiOutlineDelete} from 'react-icons/ai';

interface itemProps {
  listIndex: number;
  index: number
}

export default function Task( props: {Taskprops: CardsEntity, index: number, listIndex: number}) {
  const ref = useRef();
  const {move} = useContext(moveContext)

  const [hideTask, setHideTask] = useState(true)
  const hide = () => setHideTask(false)

  const [{isDragging}, dragRef] = useDrag(({
     type: "CARD",
     item: {index: props.index, listIndex: props.listIndex  
    },
    collect: monitor => ({
      isDragging: monitor.isDragging
    })
  }))

  const [, dropRef] = useDrop(({
    accept: 'CARD',
    hover(item: itemProps, monitor){

      const draggedListIndex = item.listIndex;
      const targetListIndex = props.index;


      const draggedIndex = item.index;
      const targetIndex = props.index;

      if(draggedIndex === targetIndex){
        return
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      // index da lista arrastada // index da task arrastada // index da task que vai ficar junto
      move(draggedListIndex, draggedIndex, targetIndex)

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  }))
  dragRef(dropRef(ref));
  return (
    <Container ref={ref} isDragging={isDragging}>
      {hideTask ?
      
      <div>
          <header> 
          <h3>{props.Taskprops.content}</h3>
        </header>
        <div className="bottom">
             {props.Taskprops.labels?.map(label => <Color 
             key={label.text} color={label.color}>
            {label.text}</Color>)}
             <AiOutlineDelete size={16} className='delete' onClick={hide} />
        </div>
      </div>
        : null }
    </Container>
  );
}
