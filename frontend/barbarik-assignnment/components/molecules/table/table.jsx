'use client'
import TableRow from "@/components/atoms/table-row/table-row";
import styles from "./table.module.css"

export default function Table({
    data = [],
    noOfCoumns = 4,
    headers=[]
}){
    return (
        <div className={styles.mainWrapper}>
            {
                data.map((e,index)=> <TableRow key={index} noOfCoumns={noOfCoumns} data={Object.values(e)}/> )
            }
        </div>
    )
}