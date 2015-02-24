use sw201501;
var demo2ok = db.demo2.count() && true;
if(!demo2ok){
  var doc = {
    "Nombre": "Orlando",
    "ApellidoPaterno":"Betancourth",
    "ApellidoMaterno":"Alvarenga",
    "NumeroIdentidad":"0801198412349",
    "Direccion":{
        "Ciudad":"Tegucigalpa",
        "Departamento":"Fco Morazán",
        "Direccion1":"Col. 15 Septiembre",
        "Direccion2":"Bloque 5 casa ???",
        "Telefono":"50412345678"
      },
    "GradosAcademicos":[
      "Primaria", "Secundaria", "Licenciatura",
      "Maestría", "Especialización"
    ],
    "GPA":[7,8,9,10,10],
    "Viajes":[
        { "Pais":"El Salvador",
          "Ciudad":"San Salvador",
          "Anio":"1989"} ,
        { "Pais":"Costa Rica",
            "Ciudad":"San José",
            "Anio":"1993"} ,
        { "Pais":"Nicaragua",
          "Ciudad":"Managua",
          "Anio":"2001"}
      ]
  };
  db.demo2.insert(doc);
}

var proy = {
  "Nombre":1,
  "NumeroIdentidad":1
};

var query = {
  "Nombre":"Orlando"
};

db.demo2.find(query, proy).pretty();

query = {
  "Direccion.Ciudad":"Tegucigalpa"
};

db.demo2.find(query, proy).pretty();

query={
  "GradosAcademicos" : "Licenciatura"
};

db.demo2.find(query, proy).pretty();

query={
  "Viajes.Anio":"1993"
};

db.demo2.find(query, proy).pretty();

query={
  "GPA" : {$elemMatch :{$in:[8,9]}}
};

db.demo2.find(query, proy).pretty();

query={
  "GPA" : {$elemMatch:{$gt:9}}
}

db.demo2.find(query, proy).pretty();

query={
  "GPA" : {$elemMatch:{$gt:4, $lt:9}}
}

db.demo2.find(query, proy).pretty();


query={
  "GPA" : {$elemMatch:{$gte:4, $lte:9}}
}

db.demo2.find(query, proy).pretty();
