use SW;
var vPalabras = new Array();
vPalabras.push("Hola");
vPalabras.push("Adios");
vPalabras.push("Buenos días");
vPalabras.push("Buenas Noches");
vPalabras.push("Gracias");
vPalabras.push("Disculpe");
vPalabras.push("Buenas Tardes");
vPalabras.push("Pase usted");
vPalabras.push("No hay de que so no mas de papa");
vPalabras.push("Bienvenido");

for(var i = 1 ; i <= 100 ; i++){
    var p1 = vPalabras[(Math.floor(Math.random() * 9))],
    p2 = vPalabras[(Math.floor(Math.random() * 9))],
    p3 = vPalabras[(Math.floor(Math.random() * 9))],
    p4 = vPalabras[(Math.floor(Math.random() * 9))],
    p5 = vPalabras[(Math.floor(Math.random() * 9))];

    var doc = { "num": i,
              "palabras":[p1,p2,
                          p3,p4,
                          p5]
            };
    db.randomP.insert(doc);
}
