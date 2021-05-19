//accedemos a la fila del contenedor carousel, fila de scrol horizontal para el carousel
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda')
const flechaderecha = document.getElementById('flecha-derecha')

//eventlistener para la flecha derecha
flechaderecha.addEventListener('click', () =>{
    //al hacer click obtiene el scrol de la fila y quiero que lo tomes y a ese scrol le sumes
    //el offsetwidth
    //el tamaño del scroll es 810
    //0             +   810
    fila.scrollLeft += fila.offsetWidth;
})

flechaizquierda.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
});

//paginacion: numero de peliculas que veremos en una sola pagina o pantalla cuando la vemos
// es por si tenemos 21 peliculas y queremos mostrar 5 en 4 paginas
const numeroPaginas = Math.ceil(peliculas.length/5);    