import { createContext } from "react";
import useTasks from "../hooks/useTasks.js";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {

    const { tasks,
        addTask,
        removeTask,
        updateTask } = useTasks();

    return (
        <GlobalContext.Provider
            value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    );
}