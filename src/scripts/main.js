AOS.init();

const dataDoEvento = new Date("feb 10, 2026 9:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEVento =  Math.floor(distanciaAteOEvento/ (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvent = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));  
    const segundosAteOEventos = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000 );


    document.getElementById('contador').innerHTML = `O maior evento do Brasil começa em ${diasAteOEVento}d ${horasAteOEvento}h ${minutosAteOEvent}m ${segundosAteOEventos}s`

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)