//asi se obtiene la base de datos
db = db.getSiblingDB("sw201501");
var doc = {"testAttr" : "Some Value"};
db.testColl.insert(doc);
printjson(db.testColl.findOne());
