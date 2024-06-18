'use client'
import CustomButton from "@/components/atoms/button/button";
import styles from "./homepage.module.css"
import Table from "@/components/molecules/table/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { getFormattedExpenses, getFormattedInvoices } from "@/utils/helper/formatData";
import { flushSync } from "react-dom";
import RawData from "@/components/molecules/rawData/rawData";

async function getAllDashboardData(){
    try{
        console.log("Api Call")
        const data = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/zoho/dashboard`)
        return data?.data?.data
    }catch(error){
        console.log(error?.message)
    }
}

export default function Homepage(){
 
    const [invoicesData, setInvoicesData] = useState([])
    const [expensesData, setExpensesData] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [rawData,setRawData] = useState({})
    async function handleClick(){
        try{
            flushSync(()=>setIsSubmitting(true))
            if(isSubmitting) return
            const data = await getAllDashboardData()
            const {expenses=[],invoices=[]} = data || {}
            const formatedInvoicesData = getFormattedInvoices(invoices)
            const formattedExpenses = getFormattedExpenses(expenses)
            setInvoicesData(formatedInvoicesData)
            setExpensesData(formattedExpenses)
            setRawData({
                expenses,invoices
            })
        }catch(error){  
            console.log(error?.message)
        }finally{
            setIsSubmitting(false)
        }
    }

    return(
        <main className={styles.main}>
            <h1>The Barbarik Assignment</h1>
            <div className={styles.buttonWrapper}>
                <CustomButton text={isSubmitting ? "Importing..." :"Import The Data"} handleClick={handleClick}/>
            </div>
            {invoicesData?.length>0 && 
            <>
                <h2>Invoices Table</h2>
                <Table 
                    type={'invoice'} 
                    noOfCoumns={6} 
                    data={invoicesData}
                />
            </>}
            {expensesData?.length>0 && 
               <>
                    <h2>Expenses Table</h2>
                    <Table type={'invoice'} noOfCoumns={3} data={expensesData}/>
                </> 
            }
            {
                expensesData?.length==0 && invoicesData?.length==0 ? <h2>No data available to display.</h2> :
                <RawData rawData = {rawData}/>
            }


        </main>
    )
}