const axios = require("axios");
const { ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_SECRET_KEY, ZOHO_REDIRECT_URI } = require("./constants");

async function generateAccessToken() {
    // to reduce the number of calls to generate the access token we can use reddis .
    const configData = {
        method: 'post',
        url: `https://accounts.zoho.in/oauth/v2/token`,
        params: {
            refresh_token: ZOHO_REFRESH_TOKEN,
            client_id: ZOHO_CLIENT_ID,
            client_secret: ZOHO_SECRET_KEY,
            grant_type: 'refresh_token',
            redirect_uri : ZOHO_REDIRECT_URI
        }
    };
    const response = await axios(configData);
    const accessToken = response?.data?.access_token
    if(!accessToken){
        return {status: false, code: 404, message: "Zoho access token not found" } 
    }
    return {status: true, code: 200, data: accessToken };
}


module.exports = {
    generateAccessToken
}