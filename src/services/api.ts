import { ResEntity } from "../types/Kanban";

export const ApiMockResponse: ResEntity[] = [
  {
    id: 1651319512266.7095,
    title: "📝  To Do",
    cards: [
      {
        id: 1651319552926.0933,
        title: "Documentar padrões mobile",
        labels: [{ color: "#1ebffa", text: "Tag 1" }],
      },
      {
        id: 1651319568365.593,
        title: "Ajustes fluxo de compra",
        labels: [{ color: "#1ebffa", text: "Tag 1" }],
      },
      {
        id: 4567,
        title: "Banners da home",
        labels: [{ color: "#1ebffa", text: "Tag 1" }],
      },
      {
        id: 456767,
        title: "Template de e-mail marketing",
        labels: [{ color: "#1ebffa", text: "Tag 1" }],
      },
    ],
  },
  {
    id: 1651319523126.113,
    title: "💻  In Progress",
    cards: [
      {
        id: 1651319672685.5078,
        title: "Wireframe das telas",
        labels: [{ color: "#945ad1", text: "Tag 2" }],
      },
    ],
  },
  {
    id: 1651319530017.122,
    title: "🚀  Done",
    cards: [
      {
        id: 937495675767665,
        title: "Implementação do blog",
        labels: [{ color: "#59d090", text: "Tag 3" }],
      },
      {
        id: 937495675,
        title: "Análise de métricas",
        labels: [{ color: "#59d090", text: "Tag 3" }],
      },
      {
        id: 937495,
        title: "UX Review",
        labels: [{ color: "#59d090", text: "Tag 3" }],
      },
    ],
  },

];
