import classes from "./ContentContainer.module.css";

const ContentContainer = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default ContentContainer;
