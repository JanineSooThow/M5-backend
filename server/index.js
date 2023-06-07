//index.js is the entry point
const express = require('express') //requiring the express package
const app = express() //create an app using the express() function
const port = 3000  //const port = 3000. 3000 is the port we are binding to. /*1024 -> 65535 are good numbers to use


//require route 
const aPIDataRoute = require('./routes/APIBreedRoute')
//require route for echart
const chartAPIRoute = require('./routes/EchartRoute')


//create a route to a static html pg - tells the system to fetch pages from the 'frontend' directory
app.use('/', express.static('frontend'))
app.use(express.json())

//stops CORS broswer error (npm install cors)
let cors = require("cors"); 
app.use(cors())

//create a route to fetch API data - calling APIDataRoute
app.use('/dog', aPIDataRoute)
//creating a route to fetch echart API data 
app.use('/dogchart', chartAPIRoute)


//Starts/activates the express server  - lets the webserver listen on the provided port 3000, once the server starts, if successful (hidden test), send out this message to the console
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

