AOS.init();

let dataDoEvento = new Date("May 15, 2025 20:00:00")
let timeStampDoEvento = dataDoEvento.getTime()

let contaAsHoras = setInterval(function() {
    let agora = new Date()
    let timeStampAtual = agora.getTime()

    let distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    let diaEmMs = 1000 * 60 * 60 * 24
    let horaEmMs = 1000 * 60 * 60
    let minutosEmMs = 1000 * 60

    let diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
    let horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs)
    let minutosAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMs) / minutosEmMs)
    let segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)

    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)