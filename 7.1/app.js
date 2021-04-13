const axios = require('axios');
const request = require('request')
const fetch = require('node-fetch');
const superagent = require('superagent');

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

async function getUser() {                        //AXIOS
    try {
      const response = await axios.get(url);
      console.log('FETCH WITH AXIOS: '+response.data.drinks[0].strInstructions);
    } catch (error) {
      console.error(error);
    }
  }

getUser();

request({url : url , json : true} , (err , res) => {          //REQUEST
    const data = res.body.drinks[0].strInstructions;
    console.log('FETCH WITH REQUEST: ' + data)
})

fetch(url)                                                   //Fetch-Node
.then(res => res.json())
.then(json => console.log('FETCH WITH FETCH-NODE: ' + json.drinks[0].strInstructions));


superagent                                                       //Super_Agent
  .get(url)
   .end((err, res) => {
    console.log(JSON.parse(res.text).drinks[0].strInstructions)
  });