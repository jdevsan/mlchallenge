const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mutant = require('./routes/api');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {url, dbName, mutCollection, adnCollection} = require('./dbkeys')
const client = new MongoClient(url,{ useUnifiedTopology: true, useNewUrlParser: true});


app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api', mutant);


client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    app.mutantCollection = client.db(dbName).collection(mutCollection);
    app.adnCollection = client.db(dbName).collection(adnCollection);
  
    client.close();
  });



app.listen(app.get('port'), () => {
    console.log('Server is on port', app.get('port'));
  });


