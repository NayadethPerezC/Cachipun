
$("#piedra").on("click", function () {
    jugar(1)
    $("#mano").attr("class", "fa-regular fa-hand-back-fist iconos")
});

$("#papel").on("click", function(){
    jugar(2)
});

$("#tijeras").on("click", function(){
    jugar(3)
    $("#mano").attr("class", "fa-regular fa-hand-scissors iconos")
})

$("#boton").on("click", function(){
    pto_cpu= pto_cpu*0;
    pto_usuario= pto_usuario*0
    dibujar_puntaje()
    $("#mano").attr("class", "fa-regular fa-hand iconos")
    $("#mano_cpu").attr("class", "fa-regular fa-hand iconos")
    $("#ganador").html("Ganador")
})

let pto_usuario =0
let pto_cpu =0

function jugar (jugada_usuario){
    const jugada_cpu = Math.ceil(Math.random() * 3)
       
        if(jugada_usuario == 1 ){

            if(jugada_cpu== 1){
                $("#ganador").html("Empatamos con piedra")
                $("#mano_cpu").attr("class", "fa-regular fa-hand-back-fist iconos")
            }
            else if (jugada_cpu == 2){
                $("#ganador").html("Te gané con papel")
                pto_cpu +=1
            }
            else{
                $("#ganador").html("Ganaste! (Escogí tijeras)")
                pto_usuario += 1
                $("#mano_cpu").attr("class", "fa-regular fa-hand-scissors iconos")
            }
        }
        // Sera dentro o fuera del primer if
        if(jugada_usuario == 2 ){

            if(jugada_cpu== 1){
                $("#ganador").html("Ganaste! (Escogí piedra)")
                pto_usuario +=1
                $("#mano_cpu").attr("class", "fa-regular fa-hand-back-fist iconos")
            }       
            else if (jugada_cpu == 2){
                $("#ganador").html("Empatamos con papel")
            }
            else{
                $("#ganador").html("Te gané con tijeras")
                pto_cpu +=1
                $("#mano_cpu").attr("class", "fa-regular fa-hand-scissors iconos")
            }
        }

        if(jugada_usuario == 3 ){   

            if(jugada_cpu== 1){
                $("#ganador").html("Te gané con piedra")
                pto_cpu +=1
                $("#mano_cpu").attr("class", "fa-regular fa-hand-back-fist iconos")
            }
            else if (jugada_cpu == 2){
                $("#ganador").html("Ganaste! (Escogí papel)")
                pto_usuario +=1
            }
            else{
                $("#ganador").html("Empatamos con tijeras")
                $("#mano_cpu").attr("class", "fa-regular fa-hand-scissors iconos")
            }
            
        }
    dibujar_puntaje()       
}

function dibujar_puntaje(){
    $("#usuario").html(pto_usuario)
    $("#cpu").html(pto_cpu)

}



