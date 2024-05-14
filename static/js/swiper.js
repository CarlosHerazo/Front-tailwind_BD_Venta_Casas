var swiper = new Swiper('.swiper', {
    slidesPerView: 3, 
    spaceBetween: 30, 
    loop: true,
    autoplay: {
        delay: 5000, // Especifica el retraso en milisegundos entre cada cambio de slide
        disableOnInteraction: false, // Permite al usuario interactuar con el carrusel sin detener la reproducción automática
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Configuración responsive para mostrar solo un slide en dispositivos móviles
    breakpoints: {
        // Cuando el ancho de la pantalla sea menor o igual a 640px (típicamente tamaño de celulares)
        200: {
            slidesPerView: 1,
            spaceBetween: 10, // Espacio entre slides
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10, // Espacio entre slides
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 10, // Espacio entre slides
        },
    },
});

