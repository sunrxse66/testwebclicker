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
  });
});


// Функция для открытия модального окна
function showModal(modalId) {
  var modal = document.getElementById(modalId);
  if(modal) {
      var modalContent = modal.querySelector('.modal-content');
      modal.style.display = 'block';
      modalContent.style.display = 'block'; // Убедимся, что modal-content виден
      modalContent.style.bottom = '-100%'; // Устанавливаем исходное положение для анимации
      
      setTimeout(() => { // Анимация для скольжения снизу вверх
          modalContent.style.animation = 'slideIn 0.4s forwards';
      }, 10); // Маленькая задержка перед началом анимации
  }
}

// Функция для закрытия модального окна
function closeModal(modal) {
  if (modal) {
      var modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
          modalContent.style.bottom = ''; // Сбрасываем до значения по умолчанию
          modalContent.style.animation = 'slideOut 0.4s forwards';
          setTimeout(() => {
              modal.style.display = 'none'; // Полностью скроет модальное окно
              modalContent.style.removeProperty('animation'); // Удаляем анимацию
              modalContent.style.removeProperty('bottom'); // Удаляем свойство bottom
          }, 400); // Должно соответствовать продолжительности анимации
      }
  }
}

// Добавляем обработчик событий для закрытия модального окна
function setupCloseModalOnOutsideClick() {
  window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
          closeModal(event.target);
      }
  });

  // Обработчик касаний для закрытия модального окна (для мобильных устройств)
  window.addEventListener('touchend', function(event) {
      if (event.target.classList.contains('modal')) {
          closeModal(event.target);
          event.preventDefault(); // Предотвращаем выполнение последующих событий "click"
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Добавляем обработчики для открытия модальных окон
  var boostsButton = document.querySelector('.menu-cont.boost');
  var swapButton = document.querySelector('.menu-cont.swap');
  var newsButton = document.querySelector('.menu-cont.news');
  var appsButton = document.querySelector('.menu-cont.apps');

  if (boostsButton) {
      boostsButton.addEventListener('click', function() {
          showModal('boostModal');
      });
  }

  if (swapButton) {
      swapButton.addEventListener('click', function() {
          showModal('swapModal');
      });
  }

  if (newsButton) {
      newsButton.addEventListener('click', function() {
          showModal('newsModal');
      });
  }

  if (appsButton) {
      appsButton.addEventListener('click', function() {
          showModal('appsModal');
      });
  }

  // Добавляем обработчики для закрытия модальных окон
  var closeButtons = document.getElementsByClassName('close');
  for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', function(event) {
          var modal = event.target.closest('.modal');
          closeModal(modal);
      });
  }

  // Закрытие по клику вне модального окна
  window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
          closeModal(event.target);
      }
  });
});