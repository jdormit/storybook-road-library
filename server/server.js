/**
A server for Storybook Road.
@auther Jeremy Dormitzer
*/
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8080;
var mongo_url = 'mongodb://localhost:27017/test';

io.on('connection', function(client) {
	console.log('Client connected');
	
	client.on('create_account_teacher', function (data) {
		MongoClient.connect(mongo_url, function(err, db) {
			assert.equal(null,err);
			insert_teacher_account(db, data, function(result) {
				db.close();
			});
		});
	});
});

function insert_teacher_account(db, data, callback) {
	db.collection('storybook_road_accounts').insertOne(data, function(err, result) {
		assert.equal(null, err);
		callback(result);
	});
}

server.listen(port);
