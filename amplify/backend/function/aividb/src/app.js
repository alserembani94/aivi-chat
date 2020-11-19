/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const conversation_controller = require('./controllers/conversationController')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

/**********************
 * Index Route *
 **********************/

app.get('/aividb', (req, res) => {
  res.json({ message: "Hello again!" });
});

/**********************
 * Conversation Route *
 **********************/

app.get('/conversation/', conversation_controller.conversation_index);
app.get('/conversation/all', conversation_controller.conversation_list);
app.get('/conversation/create', conversation_controller.conversation_create_get);
app.post('/conversation/create', conversation_controller.conversation_create_post);
app.get('/conversation/:id', conversation_controller.conversation_detail);
app.get('/conversation/:id/update', conversation_controller.conversation_update_get);
app.post('/conversation/:id/update', conversation_controller.conversation_update_post);
app.get('/conversation/:id/delete', conversation_controller.conversation_delete_get);
app.post('/conversation/:id/delete', conversation_controller.conversation_delete_post);

/**********************
 * Listeners *
 **********************/

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
