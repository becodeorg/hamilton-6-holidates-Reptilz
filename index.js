#!/usr/bin/env node

//Variables
const axios = require('axios');
const country = require('country-list');
const readlineSync = require('readline-sync');


//Get the year (4 digits)
const day = new Date().getFullYear();
//get api url
const url ='https://date.nager.at/api/v3/PublicHolidays/';

//Questionne l'utilisateur d'encoder un pays...
const messageUserCountry = readlineSync.question('Enter a country:');
//Convertis le pays en son code ISO
const countryCode = country.getCode(messageUserCountry);


//récupération des données dans l'API et affichage dans la console
const publicHolidays = async () => {   
   try {
       const response = await axios.get(`${url}${day}/${countryCode}`);
       const datas = response.data;
        datas.forEach((data) => {
           console.log(`${data.name}/${data.date}`)
    
       });
   } catch(error) {
       console.log(error);
   }
}
publicHolidays(day, countryCode);



