'use strict';

class Actividad {
    constructor(nombre, descripcion, link) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.link = link;
    }

    mostrarActividad() {
        return `<div class="card-body">
                <h4 class="card-title">${this.nombre}</h4> 
                <p class="card-text">${this.descripcion}</p>
                -><a href='${this.link}' class='card-link text-white'>${this.link}</a><-</div>`;
        }      
    
}

let actividades = [];

function agregarActividad (nombre, descripcion, link){
    let actividad = new Actividad (nombre, descripcion, link);
    actividades.push(actividad);
}

agregarActividad('La mejor playlist de música ochentosa', 'para limpiar la casa en qlo','https://open.spotify.com/playlist/1xNMjt3dYL7ZYymiE2cs6n?si=1yJnaywpRKqTCeYSIQCS4Q');
agregarActividad('Hua Mulan', 'No es la de disney','https://www.pelispe.com/pelicula/620/hua-mulan.html');
agregarActividad('Página para flashar que sos hacker', 'eso','https://hackertyper.net/');
agregarActividad('Página para dibujar cosas flasheras', 'eso','http://weavesilk.com/');
agregarActividad('urss', 'Blog con pelis soviéticas','https://sovieticocine.blogspot.com/?fbclid=IwAR0Atc5i7ld8gfSk4Rv2e-tOW-XuAf1oXhIHZPL6A8pGnLbfKZxg9A-kwvg');
agregarActividad('Hacele un juguete a tu gato', 'tutorial de juguetes para gatites con el carton del rollo de papel higienico','https://www.youtube.com/watch?v=7zgGUYWIgBw)');
agregarActividad('Juegos para gatites', 'miau','https://www.youtube.com/watch?v=U8fg3qzve3E');
agregarActividad('Jugar al SEGA', 'Emulador y juegos de SEGA para pc','https://www.youtube.com/watch?v=cYei7yx91vw');
agregarActividad('Arcuz', 'minijuego online de aventuras. cute.','https://www.minijuegos.com/juego/arcuz-behind-the-dark');
agregarActividad('Jueguito adictivo del mal', '','http://slither.io/');
agregarActividad('Programar visuales en chrome, es facil de aprender!','aca toda la data: https://github.com/ojack/hydra-sync','https://hydra-editor.glitch.me/');
agregarActividad('V for Vendetta','Comic completo de Alan Moore','https://drive.google.com/open?id=14F8vLwfPvDh8DEV2YzpeoTL7q9Hu3BUp');
agregarActividad('Ghost in the Shell',' Manga completo de Masamune Shirow ','https://drive.google.com/open?id=1Ef9xjb4XvwRvbjtJVgrnD8dUauOYEMhs');
agregarActividad('Aprende un poquito de HTML y CSS','Página cute para aprender (con perritos)','https://www.bitdegree.org/courses/coding-for-beginners-space-doggos/');
agregarActividad('Aprende algo','cursos cortitos online gratuitos','https://www.crehana.com/ar/cursos-gratis/');
agregarActividad('Conocer musiquita nueva','dale play','https://open.spotify.com/album/3nxxTapmbeRp3rFCtOzK44?si=Q9qQkd0DT-6cp5KwBLZ44w');
agregarActividad('Escuchar unos temitas','temitas lindos que capaz no conoces','https://danmason.bandcamp.com/album/miami-virtual');
agregarActividad('Musiquita','','https://danmason.bandcamp.com/album/summertime-ep');
agregarActividad('Conocer data musical random','data sobre bandas garage formadas por mujeres en los 60','https://www.amoeba.com/blog/2014/03/eric-s-blog/all-female-bands-of-the-1960s-happy-women-s-history-month-.html');
agregarActividad('Neko Yume 猫夢 - Bizarre PS1 Styled LSD Dream Emulator Inspired Game Where You Search for 4 Lost Cats','lo mejor que vas a encontrar aca','https://modus-interactive.itch.io/neko-yume-emulatedjam');
agregarActividad('Nyan Cat','10 horas de felicidad','https://www.youtube.com/watch?v=SkgTxQm9DWM'); 

