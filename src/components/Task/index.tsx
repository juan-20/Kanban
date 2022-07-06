import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CardsEntity } from '../../types/types';
import { Container, Color } from './styles';

interface StyledDivProps {
  isDragging: boolean;
}

export default function Task( props: {Taskprops: CardsEntity, index: number}) {

  console.log(props.index + " alo")

  const ref = useRef();

  const [{isDragging}, dragRef] = useDrag(() => ({
     type: "CARD",
     item: {index: props.index, id: props.Taskprops.id, content: props.Taskprops.content},
    collect: monitor => ({
      isDragging: monitor.isDragging
    })
  }))

  const [, dropRef] = useDrop(() => ({
    accept: 'CARD',
    hover(item: any, monitor){
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


    }
  }))
  dragRef(dropRef(ref));
  return (
    <Container ref={ref}>
        <header>
          <h3>{props.Taskprops.content}</h3>
        </header>
            {props.Taskprops.labels?.map(label => <Color 
            key={label.text} color={label.color}>
              {label.text}</Color>)}
            
             
    </Container>
  );
}