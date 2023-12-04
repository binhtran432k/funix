import { useCallback } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

/**
 * @typedef NewTaskProps
 * @property {(task: import("./TaskForm").Task) => void} onAddTask
 */

/** @type {React.FC<NewTaskProps>} */
const NewTask = (props) => {
  const { onAddTask } = props;

  const { isLoading, sendRequest: requestAddTask } = useHttp();

  const addTask = useCallback(
    /**
     * @param {string} taskName
     * @param {{name: string}}  taskData
     */
    (taskName, taskData) => {
      const generatedId = taskData.name;
      const createdTask = { id: generatedId, name: taskName };
      onAddTask(createdTask);
    },
    [onAddTask],
  );

  const addTaskHandler = useCallback(
    /**
     * @param {string} taskName
     */
    (taskName) => {
      requestAddTask(addTask.bind(null, taskName), {
        url: "https://react-http-96576-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { name: taskName },
      });
    },
    [addTask, requestAddTask],
  );

  return (
    <Section>
      <TaskForm loading={isLoading} onAddTask={addTaskHandler} />
    </Section>
  );
};

export default NewTask;
