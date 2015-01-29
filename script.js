var MongoClient = require('mongodb').MongoClient 
var collection = db.collection('users'); 
var format = require('util').format;

function hep(){
	alert("xD");
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
    });
}