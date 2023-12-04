import { memo } from "react";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";
import Section from "../UI/Section";

/** @typedef {import("./TaskItem").Task} Task */

/**
 * @typedef TasksProps
 * @property {Task[]} tasks
 * @property {boolean} loading
 * @property {string?} error
 */

/** @type {React.FC<TasksProps>} */
const Tasks = memo(function Tasks(props) {
  const content = (() => {
    if (props.error) {
      return <p>{props.error}</p>;
    }
    if (props.loading) {
      return <p>Loading...</p>;
    }
    if (props.tasks.length === 0) {
      return <p>No tasks found. Start adding one!</p>;
    }
    return (
      <ul>
        {props.tasks.map((task) => (
          <TaskItem key={task.id} name={task.name} />
        ))}
      </ul>
    );
  })();

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
});

export default Tasks;
