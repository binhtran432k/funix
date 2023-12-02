import { useCallback, useState } from "react";
import classes from "./TaskForm.module.css";

/**
 * @typedef {import("../Tasks/TaskItem").Task} Task
 */

/**
 * @typedef TaskFormProps
 * @property {boolean} loading
 * @property {(taskName: string) => void} onAddTask
 */

/** @type {React.FC<TaskFormProps>} */
const TaskForm = (props) => {
  const { onAddTask, loading } = props;

  const [task, setTask] = useState("");

  /** @type {React.FormEventHandler} */
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (task.trim().length === 0) {
        alert("Please input task");
      } else {
        onAddTask(task);
      }
    },
    [task, onAddTask],
  );

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const changeHandler = useCallback((e) => {
    setTask(e.target.value);
  }, []);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" value={task} onChange={changeHandler} />
      <button type="submit" disabled={loading}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
