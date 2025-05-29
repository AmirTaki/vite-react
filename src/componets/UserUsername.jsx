import { Fragment } from "react";
// import "./styles.css"
import styles from "./styles.module.css"

export function UserUsername (props) {

    return(
        <Fragment>
            <b className={styles.username}>
                Username:
            </b>
            <span>{props.username}</span>
        </Fragment>
    )
}