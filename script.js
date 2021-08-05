'use strict';

//Запускает программу
function start() {

  //Заканчивает игру. Пустая функция.
  function finish() {
    alert('Игра окончена');
  }

  //Генерация случайного числа от 1 до 100
  let randomNumber = Math.round(Math.random()*100); 
  console.log(randomNumber);
  let num = +prompt('Угадай число от 1 до 100');
  //Количество попыток
  let k = 10;

  //Новая попытка
  function attempt() {
    if (isNaN(parseFloat(num) && isFinite(num)) && (num > 0)) {
      num = +prompt('Введи число!');
      attempt(num);
    }
  }

  attempt();

  //Сравнивает число со сгенерированным и изменяет количество попыток
  function compair() {
    if (num === randomNumber){
      let again = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if(again){
        start();
      } else {
        finish();
      }
    } else if(num === 0) {
      finish();
    } else {
      k--;
      if(k === 0){
        let again = confirm('Попытки закончились, хотите сыграть еще?');
        if(again){
          start();
        }
      } else {
        //Новая попытка угадать число
        if (num > randomNumber){
          num = +prompt('Загаданное число меньше, осталось попыток ' + k + ' Попробуй отгадать снова');
          attempt();
          compair();
        } else {
          num = +prompt('Загаданное число больше, осталось попыток ' + k + ' Попробуй отгадать снова');
          attempt();
          compair();
        }
      }
    }
  }

  compair(num);
}

start();