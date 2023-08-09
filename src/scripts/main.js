const dataDoEvento = new Date("feb 15, 2024 00:00:00")
const timeStampAniversario = dataDoEvento.getTime()

const contadorDoEvento = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime()

    const espacoDeTempo = timeStampAniversario - timeStampAtual

    const dias = 1000 * 60 * 60 * 24 
    const horas = 1000 * 60 * 60 
    const minutos = 1000 * 60 
    const segundos = 1000

    const quantidadeDeDias = Math.floor(espacoDeTempo / (dias))
    const quantidadeDeHoras = Math.floor((espacoDeTempo % (dias)) / (horas ))
    const quantidadeDeMinutos = Math.floor((espacoDeTempo % (horas)) / (minutos ))
    const quantidadeDeSegundos = Math.floor((espacoDeTempo % (minutos)) / (segundos ))
    console.log(quantidadeDeSegundos)
    document.getElementById('contador').innerHTML = `faltam ${quantidadeDeDias}d ${quantidadeDeHoras}h ${quantidadeDeMinutos}m ${quantidadeDeSegundos}s para o meu aniversario `


    if(espacoDeTempo < 0 ){
        clearInterval(contadorDoEvento)
        document.getElementById('contador').innerHTML = "Me de parabens "
    }
},1000)