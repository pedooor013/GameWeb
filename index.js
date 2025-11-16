const senhaCofre = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
const arrSenhaCofre = senhaCofre.toString().split('');

const firstChallenge = document.getElementById('first-challenge');
const secondChallenge = document.getElementById('second-challenge');
const thirdChallenge = document.getElementById('third-challenge');
const lastResponse = document.getElementById('last-response');

const resposta = document.getElementById('resposta');

async function mostrarSenha(indexPassword){
    resposta.classList.remove('d-none')
    resposta.innerHTML = `${arrSenhaCofre[indexPassword]}`;
}

function iniciarDesafio(){
    window.alert("Importante!! Tenha um caderno para anotar algumas coisas...")

    document.getElementById('inicial-page').classList.add('d-none');
    firstChallenge.classList.remove('d-none');
    
}

async function sendResponseFirstQuestion(){
    
    let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    let correctResponse = 0;

    for(i = 0; i < checkedBoxes.length; i++){
        if((checkedBoxes[i].value == 'bash') || (checkedBoxes[i].value == 'java')){
            correctResponse = -3;
        }
        if((checkedBoxes[i].value == 'html') || (checkedBoxes[i].value == 'css') || (checkedBoxes[i].value == 'sql')) {
            correctResponse++;
        }

        }
        

    if(correctResponse == 3){
        window.alert("Resposta correta!")
        mostrarSenha(0);
        setTimeout(() =>{
            firstChallenge.classList.add('d-none');
            secondChallenge.classList.remove('d-none');
        }, 1500);
        
        }else{
        window.alert("Resposta incorreta! Voltando ao inicio!!!")
        location.reload(true);
    }
}

async function sendResponseSecondQuestion(){
    var radioElements = document.getElementsByName('company');
    var selectElement;
    for(i = 0; i < radioElements.length; i++){
        if(radioElements[i].checked){
            selectElement = radioElements[i].value;
        }
    }

    if(selectElement == "Google"){
        window.alert("Resposta Correta!");
        document.getElementById('resposta-second-question').classList.remove('d-none');
        document.getElementById('resposta-second-question').innerHTML = `${arrSenhaCofre[1]}`;
        setTimeout(() => {
            secondChallenge.classList.add('d-none');
            thirdChallenge.classList.remove('d-none');
        }, 1500);
    }else{
        window.alert("Resposta incorreta! Voltando ao inicio!!!")
        location.reload(true);
    }
}

function sendResponseThirdQuestion(){
    const response = document.getElementById('first-programming-language-response').value.toUpperCase();
    
    if(response == 'FORTRAN'){ 
        window.alert("Resposta Correta!");
        document.getElementById('response-third-question').classList.remove('d-none');
        document.getElementById('response-third-question').innerHTML = `${arrSenhaCofre[2]}`;
        setTimeout(() => {
            thirdChallenge.classList.add('d-none');
            lastResponse.classList.remove('d-none');
        }, 1500);
    }else{
        window.alert("Resposta incorreta! Voltando ao inicio!!!")
        location.reload(true);
    }
}

function checkPassword(){
    const firstNum = document.getElementById('first-response').value;
    const secondNum = document.getElementById('second-response').value;
    const thirdNum = document.getElementById('third-response').value;

    if((firstNum == arrSenhaCofre[0]) && (secondNum == arrSenhaCofre[1]) && (thirdNum == arrSenhaCofre[2])){
        window.alert("Resposta Correta!");
        setTimeout(() => {
            lastResponse.classList.add('d-none');
            document.getElementById('final').classList.remove('d-none');
        }, 1500);
    }else{
        window.alert("Resposta incorreta! Voltando ao inicio!!!")
        location.reload(true);
    }
} 

