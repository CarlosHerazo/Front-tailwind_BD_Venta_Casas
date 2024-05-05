document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('[data-carousel-item]')
    const interval = 5000 // Intervalo de cambio en milisegundos (5 segundos en este caso)
    let currentIndex = 0
    let timer
  
    function showItem(index) {
      carouselItems.forEach((item) => item.classList.add('hidden'))
      carouselItems[index].classList.remove('hidden')
    }
  
    function goToNext() {
      currentIndex = (currentIndex + 1) % carouselItems.length
      showItem(currentIndex)
      resetTimer()
    }
  
    function goToPrev() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length
      showItem(currentIndex)
      resetTimer()
    }
  
    function startTimer() {
      timer = setInterval(goToNext, interval)
    }
  
    function resetTimer() {
      clearInterval(timer)
      startTimer()
    }
  
    startTimer() // Comenzar el carrusel automáticamente al cargar la página

  })