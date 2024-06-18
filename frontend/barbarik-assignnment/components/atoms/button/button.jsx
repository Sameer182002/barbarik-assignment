'use client'
import styles from "./button.module.css"

export default function CustomButton({
    text='Confirm',
    handleClick=()=>{}
}){
    return(
        <button className={styles.mainWrapper} onClick={handleClick}>
            {text}
        </button>
    )
}