import classes from "./Section.module.css";

/** @type {React.FC<React.PropsWithChildren>} */
const Section = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
