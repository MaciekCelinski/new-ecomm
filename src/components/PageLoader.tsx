import classes from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.square}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageLoader;
