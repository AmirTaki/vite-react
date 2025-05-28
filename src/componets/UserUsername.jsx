import { Fragment } from "react";

export function UserUsername (props) {
    // console.log(props)
    return(
        <Fragment>
            <b>Username:</b>
            <span>{props.username}</span>
        </Fragment>
    )
}