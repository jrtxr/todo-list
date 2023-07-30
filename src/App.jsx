import { TodoProvider } from "./context/TodosContext/TodosContext";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <TodoProvider>
      <Dashboard />
    </TodoProvider>
  );
}

export default App;
