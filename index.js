//using require to import http & fs module
const http = require('http');
const fs = require('fs');

// json api url
const json_api_url = 'http://jsonplaceholder.typicode.com/posts';

// fetching api from json_api_url
http.get(json_api_url, (response) => {

    //creating compiled_data var to hold & compile incoming data
    let compiled_data = '';


    // recieving incoming chunks of data & compiling them
    response.on('data', (chunk) => {
        compiled_data += chunk;
    });


    // writing compiled_data into a file called posts.json in result
    // NB: a directory called result was created manually
    response.on('end', () => {
        fs.writeFile('./result/posts.json', compiled_data, (err) => {

            // checking & displaying errors in writing files (if any)
            if (err) throw err;

            //console check
            console.log('File created successfully')
        });
    });
}).on ('error', (err) => {

    // checking & displaying errors in calling api (if any)
    console.log(`Error: ${err.message}`)
})