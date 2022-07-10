import React, { useEffect, useState } from "react";
import { colorsList } from "../../../services/Util";
import Modal from "../../Modal/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import { CardsEntity, LabelsEntity } from "../../../types/Kanban";
import { Container } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
interface CardModalProps {
  onClose: () => void;
  card: CardsEntity;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: CardsEntity) => void;
}
function CardModal(props: CardModalProps) {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<CardsEntity>({
    ...card,
  });

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const addLabel = (label: LabelsEntity) => {
    const index = cardValues.labels.findIndex(
      (item) => item.text === label.text,
    );
    if (index > -1) return; //if label text already exist then return

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  const removeLabel = (label: LabelsEntity) => {
    const tempLabels = cardValues.labels.filter(
      (item) => item.text !== label.text,
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);


  return (
    <Modal onClose={onClose}>
      <Container>
          <header>
          <AiFillEdit></AiFillEdit>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            buttonText="Editar Nome da task"
            placeholder="Enter Title"
            onSubmit={updateTitle}
            />
            </header>


        <section>
          <div className="title">
            <BiColorFill size={18}/>
            <p>Cores:</p>
          </div>
     
          <ul>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <CustomInput
            text="Adicionar nova Tag"
            placeholder="Enter label text"
            onSubmit={(value: string) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </section>


      </Container>
    </Modal>
  );
}

export default CardModal;
