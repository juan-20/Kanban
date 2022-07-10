import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { CardsEntity } from "../../types/Kanban";
import Tag from "../common/Tag";
import CardModal from "./CardInfo/CardModal";
import { Container } from "./style";
interface CardProps {
  card: CardsEntity;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: CardsEntity) => void;
}
function Card(props: CardProps) {
  const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard } =
    props;
  const { id, title, labels } = card;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardModal
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <Container
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="content">
          <header >
          <p>{title}</p>
          <BiTrashAlt size={16} className="trash" onClick={() => removeCard(boardId, id)} />
          </header>

          <footer>
              {labels?.map((item, index) => (
                <Tag key={index} item={item} />
              ))}
          </footer>
        </div>
       
      </Container>
    </>
  );
}

export default Card;
