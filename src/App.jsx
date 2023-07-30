import { TodoProvider } from "./context/TodosContext";

import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <TodoProvider>
      <Dashboard />
    </TodoProvider>
  );
}

export default App;
