var GD = 'derecha';
var GI = 'izquierda';
var GA = 'arriba';
var GAb = 'abajo';

var iniciado = false;

var inicio = [0, 0];
var fin = [0, 9];

var posicionActual = [0,0]

var laberinto = [
    // Primera fila
    [
        [1, 0, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0]
    ],
    // Segunda fila
    [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    // Tercera fila
    [
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 1, 0, 0]
    ],
    //  Cuarta fila
    [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 1]
    ],
    //  Quinta fila
    [
        [0, 0, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 0, 0]
    ],
    //  Sexta fila
    [
        [0, 1, 0, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1]
    ],
    //  Septima fila
    [
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 0, 1],
        [0, 1, 0, 1]
    ],
    //  Octava fila
    [
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 1, 0]
    ],
    //  Novena fila
    [
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [1, 1, 0, 1]
    ],
    //  Decima fila
    [
        [0, 1, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 1]
    ],
    //  Onceava fila
    [
        [1, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0]
    ]
];

var recorrido = [
    '2', '270°', '1', '270°', '1', '90°', '1', '90°', '1', '270°', '1', '270°', '1', '90°', '1', '90°', '2', '90°', '3', '270°', '1', '90°', '1', '270°', '3', '270°', '1', '270°', '1', '90°', '1', '90°', '5', '270°', '2', '270°', '1', '90°', '1', '270°', '1', '90°', '1', '270°', '1', '90°', '3', '90°', '1', '270°', '1', '270°', '2', '270°', '1', '90°', '1', '90°', '1', '270°', '2', '270°', '1', '90°', '1', '90°', '1', '270°', '1', '270°', '3', '90°', '1', '90°', '2', '270°', '1'
];

function imprimir_tablero () {
    var $tablero = $('#tablero');

    for (var columna = 0; columna < 11; columna++) {
        for (var fila = 0; fila < 11; fila++) {
            var $celda = $('<div class="casilla"></div>');
            $celda.html(columna + ' - ' + fila);

            $celda.attr('fila', fila);
            $celda.attr('columna', columna);

            if (laberinto[columna][fila][0] == 1) {
                $celda.addClass('linea_arriba');
            }

            if (laberinto[columna][fila][1] == 1) {
                $celda.addClass('linea_derecha');
            }

            if (laberinto[columna][fila][2] == 1) {
                $celda.addClass('linea_abajo');
            }

            if (laberinto[columna][fila][3] == 1) {
                $celda.addClass('linea_izquierda');
            }

            $tablero.append($celda);
        }
    }

    $('#tablero [fila="' + inicio[0] + '"][columna="' + inicio[1] + '"]').addClass('inicio');
    $('#tablero [fila="' + fin[0] + '"][columna="' + fin[1] + '"]').addClass('final');
}

//Algoritmo Luisa

function pintar_recorrido (recorrido) {
    let direccion = GD
    let milisegundosEntrePasos = 500 //Tiempo
    let posicionesAMover = 0
    let gradosDireccion = 270
    siguientesPosiciones = []
    for (let i = 0; i < recorrido.length; i++){ //recorrido.length

        //Busca mover de la posición actual x cantidad de posiciones
        if ((i % 2) === 0){
            posicionesAMover = parseInt(recorrido[i]) //Convertir un texto en #
            if (i === 0){ posicionesAMover--} // resteme el movimiento realizado de la posición actual
            if (direccion === GD){
                posicionActual[1] += posicionesAMover //le suma a la posición horizontal 
            }else if (direccion === GAb){
                posicionActual[0] += posicionesAMover //le suma a la posición vertical
            }else if (direccion === GI){
                posicionActual[1] -= posicionesAMover
            }else if (direccion === GA){
                posicionActual[0] -= posicionesAMover
            }
            siguientesPosiciones.push([...posicionActual]) //Los ... armann una lista sin depender de la lista original (spread)
    
            //busca donde se debe realizar el giro
        }else{
            gradosDireccion = parseInt(recorrido[i].replace("°")) //me mueve el simbolo de grado del texto y luego lo combierte a un entero
         
         //Es como la culebrita del 1100

            if (gradosDireccion===270){
                if (direccion === GD){
                    direccion = GAb
                }else if (direccion === GAb){
                    direccion = GI
                }else if (direccion === GI){
                    direccion = GA
                }else if (direccion === GA){
                    direccion = GD
                }
            } else if (gradosDireccion===90){
                if (direccion === GD){
                    direccion = GA
                }else if (direccion === GAb){
                    direccion = GD
                }else if (direccion === GI){
                    direccion = GAb
                }else if (direccion === GA){
                    direccion = GI
                }
            }
        }
    }

    //Cada cuantos segundos se va a mover. Tomando como referencia el For que se hizo anteriormente el me va a mover los pasos

    let interval = 0
    let internalID = setInterval(()=>{
        pintar_personaje(...siguientesPosiciones[interval])
        interval++
        if (interval === siguientesPosiciones.length){
            clearInterval(internalID) //Si llego hasta el final no se mueva más. 
        }
    }, milisegundosEntrePasos)


    
    for (var posicion = 0; posicion < 2; posicion++) { // reemplazar 10 por recorrido.length
        
    }
}

function pintar_personaje (columna, fila) {
    var $personaje = $('#personaje');
    $('#tablero [fila="' + fila + '"][columna="' + columna + '"]').append($personaje);
}

function puede_avanzar() {
    //ToDo: calcular si puede avanzar.
    return true;
}

function calcular_siguiente() {
    var nueva = [0, 0];

    //ToDo: calcular siguiente posición.

    return nueva;
}

function inicializar_funciones() {
    $('#siguiente').on('click', function() {
        var puede = puede_avanzar();
        var nueva_posicion = calcular_siguiente();

        if (puede) {
            pintar_personaje(nueva_posicion[0], nueva_posicion[1]);
        } else {
            alert('no puede seguir, se chocó contra un muro');
        }
    });
}

function iniciar() {

    inicializar_funciones();

    imprimir_tablero();

    pintar_personaje(0, 0);

    $('#iniciar').hide();
    iniciado = true;
    pintar_recorrido(recorrido);
}