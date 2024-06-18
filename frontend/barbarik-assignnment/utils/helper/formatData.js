export function getFormattedInvoices(data=[]){
    const newData = []
    data.forEach(invoice=>{
        const {customer_name='',company_name='',status='',invoice_number='',email='',due_date=''} = invoice || {}
        newData.push({
            customer_name : `Cust Name: ${customer_name}`,
            company_name : `Company Name: ${company_name}`,
            invoice_number : `Invoice Number: ${invoice_number}`,
            status : `Status: ${status}`,
            email: `Email: ${email}`,
            due_date : `Due Date: ${due_date}`
        })
    })
    return newData
}

export function getFormattedExpenses(data=[]){
    const newData = []
    data.forEach(expense=>{
        newData.push({
            account_name : `Acc Name : ${expense.account_name}`,
            customer_name : `Cust. Name : ${expense.customer_name}`,
            total_without_tax : `Total Without Tax : ${expense.total_without_tax}`
        })
    })
    return newData
}