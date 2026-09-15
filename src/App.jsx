import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/tasks/add" element={<AddTask />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;