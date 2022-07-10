import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";

import Card from "../Card/Card";
import CustomInput from "../CustomInput/CustomInput";

import { ResEntity, CardsEntity } from "../../types/Kanban";
import { Container, CreateNewList } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

interface BoardProps {
  board: ResEntity;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: CardsEntity) => void;
}

function DropList(props: BoardProps) {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
  } = props;
  return (
    <Container key={board?.id}>
      <header className="header">
          <h1 className="board-header-title">
            {board?.title}
          </h1>
          <div className="trash">
            <BiTrashAlt size={16} onClick={() => removeBoard(board?.id)} />
            </div>
        </header>
        <div className="board-cards custom-scroll">
          {board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))}
           <CreateNewList>
          <AiOutlinePlus className='plus-icon'/>
          <CustomInput
            text="Adicionar Tarefa"
            placeholder="Enter Card Title"
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
          </CreateNewList>
        </div>
    </Container>
  );
}

export default DropList;
