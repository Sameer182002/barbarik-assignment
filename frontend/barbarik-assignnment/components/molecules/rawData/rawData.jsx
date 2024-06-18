import styles from './rawData.module.css'

export default function RawData({
    rawData={}
}){
    return(
        <div className={styles.rawDataWrapper}>
            <div>
                <h3>Raw Expenses Data</h3>
                {
                    rawData?.expenses?.length>0 && 
                    <>
                        {rawData?.expenses?.map((item,index)=>{

                            return (
                                <div key={index} className={styles.itemIndexAndDatawrapper}>
                                    <p>{`${index + 1})`}</p>
                                    <p>
                                        {Object.keys(item).map((objItem,index)=><p key={index}>{objItem} : {JSON.stringify(item[objItem])}</p>)}
                                    </p>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div>
                <h3>Raw Invoices Data</h3>
                {
                    rawData?.invoices?.length>0 && 
                    <>
                        {rawData?.invoices?.map((item,index)=>{

                            return (
                                <div key={index} className={styles.itemIndexAndDatawrapper}>
                                    <p>{`${index + 1})`}</p>
                                    <p>
                                        {Object.keys(item).map((objItem,index)=><p key={index}>{objItem} : {JSON.stringify(item[objItem])}</p>)}
                                    </p>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </div>
    )
}