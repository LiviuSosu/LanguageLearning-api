//https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const path = require( "path" );
const fs = require( 'fs' );

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again3)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  // var fileName = __dirname+'/test.txt';
  // fs.appendFile(fileName, 'Hello World!222\n', function (err) {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // });

  // var buffer = fs.readFileSync(fileName);

  // var fileContent = buffer.toString();


  res.send("fileContent");
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});