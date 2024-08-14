let campoForm = document.querySelector(".campo-form")
let closeForm = document.querySelector(".close-btn")
let mascaraForm = document.querySelector(".mascara-form")
const audioItsMe = document.querySelector(".audio-its-me")
const audioOkiDoki = document.querySelector(".audio-oki-doki")
let campoFala = document.querySelector(".caixa-geral")
let caixaFala = document.querySelector(".caixa-fala")
let espacoCaixa = document.querySelector(".espaco-caixa")
const pergunta = document.querySelector(".pergunta")
const fala = document.querySelector(".fala")
let botaoAssistir = document.querySelector(".botao-assistir")
let botaoEspaco = document.querySelector(".botao-espaco")
const video = document.querySelector(".video")
const closeVideo = document.querySelector(".close-video")

fala.style.opacity = "0"
pergunta.style.opacity = "0"
botaoAssistir.style.display = "none"


function typeWriter(elemento){
    setTimeout(() => {       
    const textoArry = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArry.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
        
    })}, 2000);
}
function assistir(){
    mascaraForm.style.display = "block"
    video.style.display = "block"
    closeVideo.style.display = "block"
    espacoCaixa.style.display = "block"
    caixaFala.style.display = "none"
    pergunta.style.opacity = "0"
    botaoEspaco.style.display = "block"
    botaoAssistir.style.display = "none"      
    
    
}


function contact() {

    if (window.matchMedia("(max-width:400px)").matches) {
        audioItsMe.play()
        campoForm.style.left = "5vw"
        mascaraForm.style.display = "block"
        mascaraForm.style.visibility = "visible"
        espacoCaixa.style.display = "block"
        caixaFala.style.display = "none"
        pergunta.style.opacity = "0"
        botaoEspaco.style.display = "block"
        botaoAssistir.style.display = "none"
       // closeForm.style.display = "auto"
       //campoFala.style.display = "none"
       //campoFala.style.opacity = "0"
       
       
       
    } else {
        audioItsMe.play()
        campoForm.style.left = "40vw"
        mascaraForm.style.display = "block"
        
        campoForm.style.transition = "left 0.800s linear"
        espacoCaixa.style.display = "block"
        caixaFala.style.display = "none"
        pergunta.style.opacity = "0"        
        botaoEspaco.style.display = "block"
        botaoAssistir.style.display = "none"
        //closeForm.style.display = "visible"
        //campoFala.style.display = "none"
        //campoFala.style.opacity = "0"
     }
}


function toSend() {

    audioOkiDoki.play()
    campoForm.style.left = "-100%"
    mascaraForm.style.display = "none"
    espacoCaixa.style.display = "none"
    caixaFala.style.display = "block"
    setTimeout(() => {
        fala.style.opacity = "1"
    }, 2000);
    typeWriter(fala)
    setTimeout(() => {
    document.querySelector(".my-form").submit();            
    }, 7000);
    /*campoFala.style.top = "-30px"
    campoFala.style.width = "top 10s linear"*/
}

function hideForm() { 
    audioOkiDoki.play()   
    campoForm.style.left = "-100%"
    mascaraForm.style.display = "none"
    espacoCaixa.style.display = "none"
    caixaFala.style.display = "block"
    setTimeout(() => {
        pergunta.style.opacity = "1"
    }, 2000);
    typeWriter(pergunta)    
    setTimeout(() => {
        botaoEspaco.style.display = "none"
        botaoAssistir.style.display = "block"        
    }, 5700);
    
    /*campoFala.style.top = "-30px"
    campoFala.style.width = "top 10s linear"
    campoFala.style.display = "block"*/
    //campoFala.style.opacity = "1"
    //campoFala.style.transition = "opacity 2s linear"
    
  }
  function hideVideo(){
    video.style.display = "none"
    closeVideo.style.display = "none"
    mascaraForm.style.display = "none"
    espacoCaixa.style.display = "block"
    caixaFala.style.display = "none"
    pergunta.style.opacity = "0"
    botaoEspaco.style.display = "block"
    botaoAssistir.style.display = "none"
    
        
  }