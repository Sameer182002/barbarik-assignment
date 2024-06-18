const zohoService = require("../services/zohoService")

exports.getAllInvoices = async(req,res)=>{
    try{
        const {status,code,data,message} = await zohoService.getAllInvoices()
        return res.status(code || 200).send({
            status,
            data
        })
    }catch(error){
        console.log(`Error while fetching the dashboard data`, error?.response?.data?.error?.message || error?.response?.data?.error || error?.response?.data || error?.message )
        return res.status(error?.statusCode || 500).send({
            status : false,
            message : `Error while fetching the dashboard data : ${error?.response?.data?.error?.message || error?.response?.data?.error || error?.response?.data || error?.message }`
        })
    }
}