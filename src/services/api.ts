export function loadLists() {
   return{ res: [
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
        { 
          title: '🚀  Done', 
          color: '#59d090',
          cards: [
            {
              id: 4,
              content: 'Documentar padões mobile',
              labels: [{ color: "#59d090", text: "Tag 1" }],
            },
            {
              id: 5,
              content: 'Documentar padões mobile',
              labels: [{ color: "#59d090", text: "Tag 1" }],
            },
            {
              id: 6,
              content: 'Documentar padões mobile',
              labels: [{ color: "#59d090", text: "Tag 1" }],
            },
          ],
        },
      ],
   }
}