//takes in 2 params: a url and a local file path for where to put the gathered info from the url
//use request library to make http request 
//use nodes fs module to write the file to given local path
//use callback function 


const readline = require('readline');
const fs = require('fs');
const request = require('request');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const [link, filePath] = process.argv.slice(2, 4)

//fs.writeFile('message.txt', 'Hello Node.js', 'utf8');

const fetch = function(url, filePath) {
  request(url, (error, response, body) => {
    console.log('error: ', error)
    console.log('body:', body)
    fs.writeFile(filePath, body, 'utf8')
    console.log('the file has been saved')
  })
}


fetch(link, filePath);


