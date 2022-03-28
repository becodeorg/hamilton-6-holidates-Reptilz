#!/usr/bin/env node
const axios = require('axios').default;
const { getCode, getName } = require('country-list');
const country = getCode("belgium");



async function myNodeCLITool(countryCode) {
    const year = "2022";
    const url = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;

    try{
        const response = await axios.get(url);
        const datas = response.data;
        console.log(datas);
    }
    catch(err){
        console.log(err);
    }
    return countryCode;
}
myNodeCLITool(country);



