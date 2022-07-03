export interface ListData {
    res?: (ResEntity)[] | null;
    map: void
  }
export interface ResEntity {
    title: string;
    color: string | undefined;
    cards?: (CardsEntity)[] | null;
  }
export interface CardsEntity {
    id: number;
    content: string;
    labels?: (LabelsEntity)[] | null;
  }
export interface LabelsEntity {
    color: string;
    text: string;
  }
  