const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');

const HTTP_PORT = 5500;
const app = express();

var Schema = require('./schema/schema');
var graphqlHTTP = require('express-graphql');


var corsOptions = {
  origin: function (origin, callback) {
      callback(null, true)
  }
}

app.use(cors(corsOptions));

app.use('/graphql', 
    (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        graphqlHTTP({
            schema: Schema,
            pretty: true,
            graphiql: true,
            customFormatErrorFn: error => ({
                message: error.message,
                locations: error.locations,
                stack: error.stack ? error.stack.split('\n') : [],
                path: error.path,
              })
        })(req, res);
    },
);

app.listen(HTTP_PORT, () => {
    console.log('App listening');
})
