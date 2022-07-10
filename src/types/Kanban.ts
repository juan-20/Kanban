export interface LabelsEntity {
  color: string;
  text: string;
}

export interface CardsEntity {
  id: number;
  title: string;
  labels: LabelsEntity[];
}

export interface ResEntity {
  id: number;
  title: string;
  cards: CardsEntity[];
}

export interface ThemeType  {
  colors: {
      background: string
  }
}

export interface CardProps {
  card: CardsEntity;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: CardsEntity) => void;
}