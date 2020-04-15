'use strict';

const button1 = document.getElementById('sugerencia-btn');

button1.onclick =  function() { 
    let sugerencia =  document.getElementById('sugerencia');

    if(sugerencia.classList.contains('d-none')){
        sugerencia.classList.remove('d-none');
    } else {  
        sugerencia.innerHTML = '<img class="cat-img" src="./img/cat.png" alt="cat" id="loading">';   
    }
   
        
    setTimeout(function(){
        let sorteo = Math.floor(Math.random() * 20);
        sugerencia.innerHTML = actividades[sorteo].mostrarActividad();  
    }, 2000)
    
   
  ;
};