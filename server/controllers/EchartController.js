//axios must be at the top
const axios = require('axios');

const fetchAPIData = (req, res) => {


//from Postman NodeJS Axios
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.thedogapi.com/v1/breeds',
        headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
   
    let filtered      //declaring something we will use later
    if (req.params.breedgroup == "all") {  //all the data - gets all the breeds back 
      filtered = response.data    
    } else {
      filtered = response.data.filter (function (dog) {  //filtered subset of data
         return dog.breed_group == req.params.breedgroup      
        })
    }

//req parameter 
    // code written in an express.js or node.js server. it is sending an HTTP response to a client that made a request to this server
    // res.status (200):  sets the HTTP status code of the response to 200, which means "OK". A 200 status code indicates that the request has succeeded and that the server is sending the requested data back to the client.
    res.status(200)
    res.json(filtered) //sends the response data back to the client in JSON format
    })
    .catch((error) => {
        console.log(error);
    });

}

// export the function 'fetchAPIData' as a module in node.js for the router to access
module.exports = {
    fetchAPIData
}
