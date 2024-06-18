'use client'
import styles from "./table-row.module.css"

export default function TableRow({
    customRowStyle,
    customRowDataStyle,
    data=[],
    noOfCoumns=4
}){
    return(
        <div className={`${styles.mainWrapper} ${customRowStyle}`} 
        style={{
            gridTemplateColumns : `repeat(${noOfCoumns},1fr)`,
            
        }}
        >
            {data.map((item,index)=>{
                return <p key ={index} className={customRowDataStyle}>{item}</p>
            })}
        </div>
    )
}