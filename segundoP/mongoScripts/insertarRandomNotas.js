use SW;
for(var i = 0; i<=1000; i++){
    var nota1 = Math.random()*100,
        nota2 = Math.random()*100,
        nota3 = Math.random()*100,
        total = (nota1+nota2+nota3)/3;
    var doc = {
            "Nombre": "Nombre " + (i+1),
            "Notas":[
                        {
                            "tipo":"Tarea",
                            "nota": nota1,
                        },
                        {
                            "tipo":"Tarea",
                            "nota": nota2,
                        },
                        {
                            "tipo":"Examen",
                            "nota": nota3,
                        }
                    ],
            "Total": total
        };
    db.random2.insert(doc);
}
