/*Este srcipt insertará un millon
de registros con tres valores
aleatorios entre 0 y 100 para luego
responder las siguientes preguntas*/

use SW;
for(var i = 1 ; i<=1000000; i++){
    var doc = {
        "numero":i,
        "pct": i/1000000 * 100,
        "random1": Math.random() * 100,
        "random2": Math.random() * 100,
        "random3": Math.random() * 100
    };

    doc.mean = (doc.random1 +
               doc.random2 +
               doc.random3 )/3;

    db.randoms.insert(doc);
}
