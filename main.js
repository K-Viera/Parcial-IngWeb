var totalVotos = 0;
var votosCandidato1 = 0;
var votosCandidato2 = 0;
var retornoC1 = 0;
var retornoC2 = 0;
var vgenero1 = 0;
var vgenero2 = 0;
var vrango1 = 0;
var vrango2 = 0;
var vrango3 = 0;

function votar() {
    var candidato = $("#candidato").val()
    var genero = $("#genero").val()
    var edad = $("#edad").val()
    var medio = $("#medio").val()
    totalVotos++;
    if (edad == 1) {
        vrango1++;
        $("#vrango1").val(vrango1)
    } else if (edad == 2) {
        vrango2++;
        $("#vrango2").val(vrango2)
    } else {
        vrango3++;
        $("#vrango3").val(vrango3)
    }
    if (genero == 1) {
        vgenero1++;
        $("#vgenero1").val(vgenero1)
    }
    else {
        vgenero2++
        $("#vgenero2").val(vgenero2)
    }
    $("#votosTotal").val(totalVotos)
    if (candidato == 1) {
        votosCandidato1++;
        $("#votos1").val(votosCandidato1)
        if (medio == 1) {
            retornoC1 = retornoC1 + 1000
        } else if (medio == 2) {
            retornoC1 = retornoC1 + 500
        } else {
            retornoC1 = retornoC1 + 100
        }
        $("#retorno1").val(retornoC1)
    } else {
        votosCandidato2++;
        $("#votos2").val(votosCandidato2)

        if (medio == 1) {
            retornoC2 = retornoC2 + 1000
        } else if (medio == 2) {
            retornoC2 = retornoC2 + 500
        } else {
            retornoC2 = retornoC2 + 100
        }
        $("#retorno2").val(retornoC2)
    }
    $("#pvotos1").val((votosCandidato1 / totalVotos * 100).toFixed(2) + "%")
    $("#pvotos2").val((votosCandidato2 / totalVotos * 100).toFixed(2) + "%")
}
function vaciar() {
    $("#vrango1").val(0);
    $("#vrango2").val(0);
    $("#vrango3").val(0);
    $("#vgenero2").val(0);
    $("#vgenero1").val(0);
    $("#votos1").val(0);
    $("#votos2").val(0);
    $("#pvotos1").val(0);
    $("#pvotos2").val(0);
    $("#pvotos2").val(0);
    $("#retorno1").val(0);
    $("#retorno2").val(0);
    $("#votosTotal").val(0);

    totalVotos = 0;
    votosCandidato1 = 0;
    votosCandidato2 = 0;
    retornoC1 = 0;
    retornoC2 = 0;
    vgenero1 = 0;
    vgenero2 = 0;
    vrango1 = 0;
    vrango2 = 0;
    vrango3 = 0;
}
