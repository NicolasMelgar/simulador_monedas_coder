document.addEventListener("DOMContentLoaded", () => {
    // Array de monedas con sus tasas de cambio
    const monedasJSON = [
        {
            nombre: "Dólar Americano",
            abreviatura: "USD",
            tasaCambio: 1.0,
        },
        {
            nombre: "Euro",
            abreviatura: "EUR",
            tasaCambio: 0.92,
        },
        {
            nombre: "Peso Uruguayo",
            abreviatura: "UYU",
            tasaCambio: 37.75,
        },
        {
            nombre: "Peso Argentino",
            abreviatura: "ARS",
            tasaCambio: 720.0,
        },
        {
            nombre: "Peso Chileno",
            abreviatura: "CLP",
            tasaCambio: 864.0,
        },
        {
            nombre: "Real Brasileño",
            abreviatura: "BRL",
            tasaCambio: 4.97,
        },
    ];

    // Elementos del DOM
    const btnConvertir = document.getElementById("btnConvertir");
    const resultadoDiv = document.getElementById("resultado");
    const modoOscuroBtn = document.getElementById("modoOscuroBtn");

    // Función para convertir monedas
    btnConvertir.addEventListener("click", () => {
        const deMonedaSelect = document.getElementById("deMoneda");
        const aMonedaSelect = document.getElementById("aMoneda");
        const cantidadInput = document.getElementById("cantidad");

        const deMoneda = deMonedaSelect.value.toUpperCase();
        const aMoneda = aMonedaSelect.value.toUpperCase();
        const cantidad = parseFloat(cantidadInput.value);

        const monedaOrigen = monedasJSON.find((moneda) => moneda.abreviatura === deMoneda);
        const monedaDestino = monedasJSON.find((moneda) => moneda.abreviatura === aMoneda);

        if (!isNaN(cantidad) && monedaOrigen && monedaDestino) {
            const convertedAmount = cantidad * (monedaDestino.tasaCambio / monedaOrigen.tasaCambio);

            /*--------------------------------------------------------------------------------*/
            //Si no quiere nada escrito en el div y solo la alerta
            //suprima la línea siguiente y elimine el div con id resultado del html
            resultadoDiv.textContent = `${cantidad.toFixed(2)} ${deMoneda} son equivalentes a ${convertedAmount.toFixed(2)} ${aMoneda}`;
            swal("El monto ingresado es equivalente a: ", `${convertedAmount.toFixed(2)} ${aMoneda}`, "");//por alguna razón si coloco success aquí se ve extraño, por eso lo elimné
        } else {
            //resultadoDiv.textContent = "Ingrese un valor válido.";
            swal("Por favor, ingrese un valor correcto.", `Por ejemplo: 100`, "error");
        }
    });

    /*El if anterior sin escribir el HTML debería quedar así*/
/*
    if (!isNaN(cantidad) && monedaOrigen && monedaDestino) {
        const convertedAmount = cantidad * (monedaDestino.tasaCambio / monedaOrigen.tasaCambio);
        swal("El monto ingresado es equivalente a: ", `${convertedAmount.toFixed(2)} ${aMoneda}`, "");
    } else {
        swal("Por favor, ingrese un valor correcto.", `Por ejemplo: 100`, "error");
    }
*/
/*-----------------------------------------------------------------*/



    // Cambio de modo oscuro
    modoOscuroBtn.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro-activado");
        /*---------------------------------------------------------------------*/
        //Con este if le preguntamos si está en modo oscuro o no
        //Ojo que en este caso deben ser dos signos de igual o tres...
        //porque si solo ponemos un signo asignamos la clase al body siempre! Es decir, quedará oscuro siempre
        if(document.body.className  === "modo-oscuro-activado"){
            swal("Acabas de cambiar a modo oscuro");
        }else{
            swal("Acabas de cambiar a modo claro");
        }
    
    });
});

