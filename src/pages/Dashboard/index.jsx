import { TodoZone } from "../../components/TodoZone";

import "./styles.css";

const DEFALUT_TODOLIST_ZONES = [
  { title: "Todos", status: "todo" },
  { title: "Fazendo", status: "doing" },
  { title: "Concluídas", status: "complete" },
];

export const Dashboard = () => {
  return (
    <main>
      {DEFALUT_TODOLIST_ZONES.map(({ status, title }, index) => (
        <TodoZone key={`zone-${index}`} status={status} title={title} />
      ))}
    </main>
  );
};
