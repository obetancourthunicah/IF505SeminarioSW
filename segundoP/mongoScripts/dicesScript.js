for(var i=1; i <= 1000; i++){
 var p1 = Math.floor(Math.random() * 6) + 1,
 p2 = Math.floor(Math.random() * 6) + 1,
 p3 = Math.floor(Math.random() * 6) + 1,
 p4 = Math.floor(Math.random() * 6) + 1,
 p5 = Math.floor(Math.random() * 6) + 1,
 p6 = Math.floor(Math.random() * 6) + 1,
 p7 = Math.floor(Math.random() * 6) + 1,
 p8 = Math.floor(Math.random() * 6) + 1,
 p9 = Math.floor(Math.random() * 6) + 1,
 p10 =Math.floor(Math.random() * 6) + 1;
 var doc = {
 "docnum":i,
 "par1":p1,
 "par2":p2,
 "par3":p3,
 "par4":p4,
 "par5":p5,
 "par6":p6,
 "par7":p7,
 "par8":p8,
 "par9":p9,
 "par10":p10,
 "parArr":[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10],
 "parInv":[p10,p9,p8,p7,p6,p5,p4,p3,p2,p1],
 "parEven":[p2,p4,p6,p8,p10],
 "parOdd":[p1,p3,p5,p7,p9]
 };
 doc.parMean = (p1+p2+p3+p4+p5+p6+p7+p8+p9+p10)/10;
 db.dices.insert(doc);
}






db.dices.find({$and:[{"docnum":{$gte:20}},{"docnum":{$lte:30}}]}
             , {"docnum":1,"parMean":1} );


db.<colección>.find({criterios de filtro},{proyeccion })

db.dices.find({$and:[{"docnum":{$gte:20}},{"docnum":{$lte:30}}]},
                {"par9":1,"_id":0});
// Para actualizar un documento, si el atributo existe lo
// le asigna el valor
// Sino existe, crea el atributo y le asigna el valor
db.dices.update({"docnum":500}, {"$set":{"usuario":"obetancourth"}});
// Incrementa el valor de un atribuot por el valor establecido
// si no existe el atributo lo crea con el primer incremento
db.dices.update({"docnum":500}, {"$inc":{"visit":1}});
//El tercer paramentro de update son opciones, la opcion
//multi permite que mongodb actualice varios documentos
//de un solo.
db.dice.update({"docnum":500}, {"$inc":{"visit":1}}, {"multi":1});
