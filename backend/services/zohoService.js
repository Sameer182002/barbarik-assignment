const axios = require('axios');
const { generateAccessToken } = require('../utils/helper');
const { ZOHO_ORGANISATION_ID } = require('../utils/constants');

exports.getAllInvoices = async()=>{
    const {data:accessToken,status,code,message} = await generateAccessToken()
    if(!status){
        console.log(`Error while generating access token :`,message)
        return {status, code, message}
    }
    const headers = {
        Authorization : `Zoho-oauthtoken ${accessToken}`
    }

    const [invoiceResponse,expensesResponse] = await Promise.all([
        axios.get(`https://www.zohoapis.in/books/v3/invoices`,{
            params:{
                organization_id : ZOHO_ORGANISATION_ID
            },
            headers : headers
        }),
        axios.get(`https://www.zohoapis.in/books/v3/expenses`,{
            params:{
                organization_id : ZOHO_ORGANISATION_ID
            },
            headers : headers
        })
    ])

    const data = {
        invoices : [...invoiceResponse?.data?.invoices],
        expenses : [...expensesResponse?.data?.expenses]
    }

    return {status:true,code:200,data}

}