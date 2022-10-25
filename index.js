//https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const path = require( "path" );
const fs = require( 'fs' );

const PORT = process.env.PORT || 5000

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
  var fileName = __dirname+'/test.txt';
  fs.appendFile(fileName, 'Hello World!2223\n', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });

  var buffer = fs.readFileSync(fileName);

  var fileContent = buffer.toString();


  res.send(fileContent);
});

app.post('/',  (req, res) => {
  
  res.send({ message: 'New ad inserted.' });
});
// starting the server
app.listen(PORT, () => {
  console.log('listening on port '+ PORT);
});


// git add .
// git commit -m "updated to nodemon"
// git push heroku main
// heroku ps:scale web=1