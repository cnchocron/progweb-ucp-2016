var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristhian Chocron";
    }

    self.items = function (cantidad) {
        
        var miLista = '<ul>';

        for (i = 1; i <= cantidad; i++) {
            miLista += '<li> Item ' + 
                        i + 
                        '<form action="" method="get">'+
                        '<input type="hidden" name="cantidad" value="' +
                        i
                        +'">' +
                        '<input type="submit" value="Item' + i +'">'+
                        '</form></li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    self.preguntaArmar = function (id) {
        
                
        var preguntas = [ {

            id: 1,
            descripcion : '¿Cual es la moneda Oficial de Costa Rica?',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'Peso de Costa Rica'
                },
                {
                    id: 2,
                    descripcion: 'Dolar de Costa Rica'
                },
                {
                    id: 3,
                    descripcion: 'Colon de Costa Rica'
                },
                {
                    id: 4,
                    descripcion: 'Dolar Americano'
                },
            ]}
            ,

            {
                id: 2,
                descripcion : '¿Cual es la moneda Oficial de Nicaragua?',
                respuestas : [
                    {
                        id: 1,
                        descripcion: 'Sol'
                    },
                    {
                        id: 2,
                        descripcion: 'Cordoba'
                    },
                    {
                        id: 3,
                        descripcion: 'Dolar Americano'
                    },
                    {
                        id: 4,
                        descripcion: 'Quetzal'
                    },
                ]
            }
        ];
        
        
        var pregunta = preguntas[id];
        
        
        var html = '';
        html += '<div class="row">';
        
        //titulo
        html += '<div name="preguntaId" class="col-md-12 pregunta-titulo">';
        html += '<h2>';
        html += pregunta.descripcion;
        html += '</h2>';
        html += '</div>'; //fin de pregunta-titulo
        
        
        
        
        
        //respuestas
        html += '<div class="col-md-offset-3 col-md-6 pregunta-respuestas">';
        
        
        
        for (i = 0; i < pregunta.respuestas.length; i++) {
            var r = pregunta.respuestas[i];
            html += '';
            html += '<form action="" method="get">';
            html += '<input name="preguntaId" type="hidden" value="' + id +'" />';
            html += '<input name="respuestaId" type="hidden" value="' + r.id +'" />';
            html += '<input name="" type="submit" class="btn btn-primary col-md-12 col-xs-12 " value="' + r.descripcion+'" />';

            html += '</form>';
            html += '';
        }
        
        
        

        html += '</div>'; //fin de pregunta-respuestas
        
        
        html += '</div>'; //fin de row
        
        
        return html;
    }
    
    return self;
}();

module.exports = app;