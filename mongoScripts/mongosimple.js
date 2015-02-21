// mongo < scriptName.js

use sw201501;
show collections;
//var doc = {"otherAttri":"Some other value"};
//db.testSimple.insert(doc);
//db.testSimple.findOne();

//Revisando Esquema de Base de Datos
checkSchema = function(){
  var collUsuariosExists = db.usuarios.count();
  var collAulasExists = db.aulas.count();
  if(!collUsuariosExists){
    var firstUser = {"username":"administrator",
                     "pswd":"whenthecatsgooutthemicepartyallnight",
                     "name":"Administrador del Sitio",
                     "fchIng": new Date(),
                     "roles":["admin","all"]
                   },
        secondUser = {"username":"guest",
                         "pswd":"bibidibabidiboo",
                         "name":"Guest User",
                         "fchIng": new Date(),
                         "roles":["all"]
                       };
        db.usuarios.insert(firstUser);
        db.usuarios.insert(secondUser);
  }
  if(!collAulasExists){
    // implementar con 10 aulas.
    // del Edificio F
  }
}


checkSchema();
db.usuarios.find().pretty();
db.aulas.find().pretty();
