'use strict';
//actividades
let actividades;

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://raw.githubusercontent.com/JusRecondo/cuarentenapp/master/db.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200) {
        actividades = JSON.parse(xhr.responseText);
    }
}

 
//sortear y mostrar actividad   
const button1 = document.querySelector('#sugerencia-btn');
const sugerencia =  document.querySelector('#sugerencia');

function mostrarActividad(actividad) {   
    return `<div class="card-body">
            <h4 class="card-title">${actividad.nombre}</h4> 
            <p class="card-text">${actividad.descripcion}</p>
            -><a href='${actividad.link}' class='card-link text-white' target="_blank">${actividad.link}</a><-</div>`;
    } 

button1.addEventListener('click', sortearActividad);

function sortearActividad() { 
   
    if(sugerencia.classList.contains('d-none')){
        sugerencia.classList.remove('d-none');
    } else {  
        sugerencia.innerHTML = '<img class="cat-img" src="./img/cat.png" alt="cat" id="loading">';   
    }
   
    let sorteo = Math.floor(Math.random() * 27);
        let actividad = actividades[sorteo];
        
    setTimeout(function(){     
        sugerencia.innerHTML = mostrarActividad(actividad);  
    }, 1500)
       
  ;
};

//form 
const button2 = document.querySelector('#form-btn');
button2.addEventListener('click', mostrarFormulario);

function mostrarFormulario() {
    let formulario = document.querySelector('#formulario');

    formulario.classList.toggle('d-none');      
}; 


