// Запрет событий `touchmove` для предотвращения скролла на мобильных устройствах
window.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
  
  // Запрет событий `wheel` для предотвращения скролла мышью
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
  }, { passive: false });
  
  // Запрет событий `keydown` для предотвращения скролла клавишами
  window.addEventListener('keydown', function(e) {
    if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }, false);