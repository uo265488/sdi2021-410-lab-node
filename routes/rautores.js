module.exports = function( app, swig) {
    app.get('/autores/agregar', function(req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autor", function(req, res) {
        let respuesta = "Autor agregado: ";
        if ( req.body.nombre == "undefined") {
            respuesta += "Nombre no enviado en la peticion. ";
        } else {
            respuesta += req.body.nombre + "<br>";
        }
        if ( req.body.grupo == "undefined") {
            respuesta += "Grupo no enviado en la peticion. ";
        } else {
            respuesta += "grupo: " + req.body.grupo + "<br>";
        }
        if ( req.body.rol == "undefined") {
            respuesta += "Rol no enviado en la peticion. ";
        } else {
            respuesta += "rol: " + req.body.rol;
        }

        res.send(respuesta);
    });

    app.get("/autores", function(req, res) {

        let canciones = [{
            "nombre": "Ernesto",
            "grupo": "La filarmonica de Oviedo",
            "rol" : "Cantante"
        }, {
            "nombre": "Mozart",
            "grupo": "Filarmonica de Oviedo",
            "rol" : "Guitarrista"
        }, {
            "nombre": "LUDWIG",
            "grupo": "La banda del truebano",
            "rol" : "Teclista"

        }];

        let respuesta = swig.renderFile('views/bautores.html', {
            autores : canciones

        });

        res.send(respuesta);
    });
};