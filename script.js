// Запрет событий `touchmove` для предотвращения скролла на мобильных устройствах
window.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
  