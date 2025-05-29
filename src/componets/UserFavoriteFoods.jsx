import { createElement } from "react"
import styles from "./users.module.scss"

export function UserFavoriteFoods (){
    // return createElement("div", null, <div>UserFavoriteFoods</div>)

    return createElement(
        "section", 
        null, 
        <>
            {/* <span className={styles.foodsTitle } */}
            <span className={styles['foods-title'] }
            >
                Favorite Foods :
            </span>
            <br/>
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Mediterranean Food</li>
            </ul>
        </>
    )
}