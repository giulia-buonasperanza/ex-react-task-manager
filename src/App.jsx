import { BrowserRouter, Routes, Route } from "react-router-dom";


import { GlobalProvider } from "./contexts/GlobalContext";
import Navbar from "./components/Navbar";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetail from "./pages/TaskDetail";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/add" element={<AddTask />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;