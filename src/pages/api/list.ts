import type { NextApiRequest, NextApiResponse } from 'next'


export interface Data {
  res?: (ResEntity)[] | null;
}
export interface ResEntity {
  title: string;
  creatable: boolean;
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



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
     res: [
      { 
        title: '📝  To Do', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Documentar padões mobile',
            labels: [{ color: "#fff", text: "Tag 1" }],
          },
        ],
      }
    ],
  })
}
