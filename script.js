// Расширение виджета Telegram Web App
Telegram.WebApp.expand();

// Запрет событий `touchmove` для предотвращения скролла на мобильных устройствах
window.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
  // Находим элемент h2 и картинку coin1.png по селектору
  const scoreElement = document.querySelector('.content h2');
  const coin = document.querySelector('.right-cont img');

  // Устанавливаем начальное значение очков
  let score = 0;

  // Добавляем обработчик события клика на картинку
  coin.addEventListener('click', function(event) {
    // Увеличиваем значение очков и обновляем содержимое h2
    scoreElement.textContent = ++score;

    // Получаем размеры и позицию изображения
    const { width, height, left, top } = coin.getBoundingClientRect();
    // Вычисляем центр изображения
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Получаем позицию клика относительно документа
    const clickX = event.pageX;
    const clickY = event.pageY;
    // Вычисляем углы наклона
    const rotateX = (clickY - centerY) / 20;
    const rotateY = -(clickX - centerX) / 20;
    // Применяем стили с углами наклона
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // Возвращаем монету в исходное состояние
    setTimeout(() => {
      coin.style.transform = '';
    }, 200);

    // Вибрация при нажатии (если поддерживается устройством и разрешена в Telegram)
    if (Telegram.WebApp.canUseNativeDeviceFeatures() && navigator.vibrate) {
      navigator.vibrate(200);
    }
  });
});