// ----------- EVENTOS -------------
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

// ------ FUNÇÃO --------
function upClock (){
    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds() 

    // Relogio Digital
    digitalElement.innerHTML = 
    `${inserirZero(hora)}:${inserirZero(minuto)}:${inserirZero(segundo)}`

    //Relogio Analogico
    //Calculando o angulo de cada elemento - ponteiros
    let sDeg = ((360 / 60) * segundo) - 90
    let mDeg = (((360 / 60) * minuto) + ((sDeg + 90) * (1 / 60))) - 90
    let hDeg = ((360 / 12) * hora) - 90

   //aplicando o ângulo calculado no CSS para atualizar a posição dos ponteiros
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

//Função para inserir o número ZERO quando houver uma casa decimal
// exemplo: "09:01:07"
function inserirZero (time){
    /*
    if (time < 10){
         return '0'+time
     } else {
         return time
     }    
    */ 
    return time < 10 ? `0${time}` : time

}

//função para atualizar os relógios a cada segundo
setInterval(upClock, 1000)
upClock() //setando a função para tirar o delay do relogio ao atualizar a pagina