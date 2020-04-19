'use strict';
//actividades
let actividades;

let xhr = new XMLHttpRequest();

xhr.open('GET', './db.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200) {
        actividades = JSON.parse(xhr.responseText);
    }
}

function mostrarActividad(actividad) {   
    return `<div class="card-body">
            <h4 class="card-title">${actividad.nombre}</h4> 
            <p class="card-text">${actividad.descripcion}</p>
            -><a href='${actividad.link}' class='card-link text-white' target="_blank">${actividad.link}</a><-</div>`;
    } 
 
//sorteo    
const button1 = document.getElementById('sugerencia-btn');

button1.onclick =  function() { 
    let sugerencia =  document.getElementById('sugerencia');

    if(sugerencia.classList.contains('d-none')){
        sugerencia.classList.remove('d-none');
    } else {  
        sugerencia.innerHTML = '<img class="cat-img" src="./img/cat.png" alt="cat" id="loading">';   
    }
   
        
    setTimeout(function(){
        let sorteo = Math.floor(Math.random() * 27);
        let actividad = actividades[sorteo];
        sugerencia.innerHTML = mostrarActividad(actividad);  
    }, 2000)
       
  ;
};

//form
const button2 = document.getElementById('form-btn');

button2.onclick = function() {
    let formulario = document.getElementById('formulario');

    formulario.classList.toggle('d-none');
    
        
};


