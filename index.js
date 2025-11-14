const senhaCofre = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
const arrSenhaCofre = senhaCofre.toString().split('');

const firstChallenge = document.getElementById('first-challenge');
const secondChallenge = document.getElementById('second-challenge');
const thirdChallenge = document.getElementById('third-challenge');
const fourthChallenge = document.getElementById('fourth-challenge');
const fifthChallenge = document.getElementById('fifth-challenge');


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

    console.log(checkedBoxes);
    for(i = 0; i < checkedBoxes.length; i++){

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

