import { useCallback, useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const addTaskHandler = useCallback((task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }, []);

  useEffect(() => {
    const transformTasks = (data) => {
      const transformedTasks = Object.entries(data).map(([id, v]) => ({
        ...v,
        id,
      }));
      setTasks(transformedTasks);
    };

    fetchTasks(transformTasks, {
      url: "https://react-http-96576-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);

  return (
    <>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks loading={isLoading} error={error} tasks={tasks} />
    </>
  );
}

export default App;
