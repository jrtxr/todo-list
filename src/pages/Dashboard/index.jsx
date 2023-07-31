import { TodoZone } from "../../components/TodoZone";

import "./styles.css";

const DEFALUT_TODOLIST_ZONES = [
  { title: "A fazeres", status: "todo", borderColor: "white" },
  { title: "Fazendo", status: "doing", borderColor: "blue" },
  { title: "Concluídas", status: "complete", borderColor: "green" },
];

export const Dashboard = () => {
  return (
    <main data-testid="main">
      {DEFALUT_TODOLIST_ZONES.map(({ status, title, borderColor }, index) => (
        <TodoZone
          key={`zone-${index}`}
          id={`zone-${status}`}
          status={status}
          title={title}
          borderColor={borderColor}
        />
      ))}
    </main>
  );
};
