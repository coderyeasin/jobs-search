import { Fragment } from "react";
import styles from "../../styles/Home.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <main >{props.children}</main>
    </Fragment>
  );
};

export default Layout;
