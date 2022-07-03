import type { NextApiRequest, NextApiResponse } from 'next'
import { ResEntity } from '../../types/types';

export interface Data {
  res?: (ResEntity)[] | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
     res: [
      { 
        title: '📝  To Do', 
        color: '#5cc4ff',
        cards: [
          {
            id: 1,
            content: 'Estudar react',
            labels: [{ color: "#5cc4ff", text: "Tag 1" }],
          },
          {
            id: 2,
            content: 'Jogar valorant',
            labels: [{ color: "#5cc4ff", text: "Tag 1" }],
          },
        ],
      },
      { 
        title: '💻  In Progress', 
        color: '#945ad1',
        cards: [
          {
            id: 3,
            content: 'Documentar padões mobile',
            labels: [{ color: "#945ad1", text: "Tag 1" }],
          },
        ],
      },
    ],
  })
}
