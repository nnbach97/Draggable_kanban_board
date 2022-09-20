import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "To Do",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn Javascript",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
      },
      {
        id: uuidv4(),
        title: "Learn PHP",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
      {
        id: uuidv4(),
        title: "Learn Jquery",
      },
      {
        id: uuidv4(),
        title: "Learn Java",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn VUE",
      },
      {
        id: uuidv4(),
        title: "Learn SCSS",
      },
      {
        id: uuidv4(),
        title: "Learn TypeScript",
      },
    ],
  },
];

export default mockData;
