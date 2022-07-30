var boton = document.querySelector(".boton");
var textarea = document.querySelector('.textarea1');
var desencriptar = document.querySelector('.desencriptador');
var logoytexto = document.querySelector('.contenido_principal');
var displaynone = document.querySelector('.div-encriptado');
var codigo = document.querySelector('#text'); 


boton.addEventListener('click', ()=>{
    if(textarea.value === ''){
        alert('No has introducido ninguna palabra');
        logoytexto.classList.remove('display-none');
        displaynone.classList.remove('display');
    }
    else if(textarea.value === textarea.value.toUpperCase()){
        alert('has introducido mayusculas');
        logoytexto.classList.remove('display-none');
        displaynone.classList.remove('display');
    }
    else{
    logoytexto.classList.add('display-none');
    displaynone.classList.add('display');
    codigo.value = codificador(textarea.value);
    }
});

desencriptar.addEventListener('click', ()=>{
    codigo.value = descodificador(textarea.value);
});


function codificador(text){
    let capsula = [];
    for(let i = 0; i < text.length; i++){
        capsula.push(text[i]);
    };

    for(let i = 0; i < capsula.length; i++){
        if(capsula[i] === 'e'){
           capsula[i] = 'enter';
        }
        else if(capsula[i] === 'i'){
            capsula[i] = 'imes';
        }
        else if(capsula[i] == 'a'){
            capsula[i] = 'ai';
        }
        else if(capsula[i] === 'o'){
            capsula[i] = 'ober';
        }
        else if(capsula[i] === 'u'){
            capsula[i] = 'ufat';
        }
    }

    return capsula.join('');
}

function descodificador(text){
    let capsula = [];
    for(let i = 0; i < text.length; i++){
        capsula.push(text[i]);
    };

    for(let i = 0; i < capsula.length; i++){
        if(capsula[i] === 'e' && capsula[i+1] === 'n' && capsula[i+2] === 't' && capsula[i+3] === 'e' && capsula[i+4] === 'r'){
           capsula[i+1] = '';
           capsula[i+2] = '';
           capsula[i+3] = '';
           capsula[i+4] = '';

        }
        else if(capsula[i] === 'i' && capsula[i+1] === 'm' && capsula[i+2] === 'e' && capsula[i+3] === 's'){
            capsula[i+1] = '';
            capsula[i+2] = '';
            capsula[i+3] = '';
        }
        else if(capsula[i] === 'a' && capsula[i+1] === 'i'){
            capsula[i+1] = '';
        }
        else if(capsula[i] === 'o' && capsula[i+1] === 'b' && capsula[i+2] === 'e' && capsula[i+3] === 'r'){
            capsula[i+1] = '';
            capsula[i+2] = '';
            capsula[i+3] = '';
        }
        else if(capsula[i] === 'u' && capsula[i+1] === 'f' && capsula[i+2] === 'a' && capsula[i+3] === 't'){
            capsula[i+1] = '';
            capsula[i+2] = '';
            capsula[i+3] = '';
        }
    }

    return capsula.join('');
}

function copiar(){
    alert('Copia Exitosa');
    var input = document.createElement('input');
    document.body.appendChild(input);
    input.value = codigo.value;
    input.select(); 
    document.execCommand('copy');
    document.body.removeChild(input);
}

