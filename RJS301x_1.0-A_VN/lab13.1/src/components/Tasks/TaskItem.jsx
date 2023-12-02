import classes from "./TaskItem.module.css";

/**
 * @typedef Task
 * @property {string} id
 * @property {string} name
 */

/** @typedef {Omit<Task, "id">} TaskItemProps */

/** @type {React.FC<TaskItemProps>} */
const TaskItem = (props) => {
  return <li className={classes.task}>{props.name}</li>;
};

export default TaskItem;
