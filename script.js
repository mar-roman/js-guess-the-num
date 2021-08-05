'use strict';

//Запускает программу
function start() {

  //Заканчивает игру
  function finish(){}

  //Генерация случайного числа от 1 до 100
  let randomNumber = Math.round(Math.random()*100); 
  console.log(randomNumber);
  let num = +prompt('Угадай число от 1 до 100');

  //Проверка на число
  function isNumber() {
    if (num === 0) {
      alert('Игра окончена');
    } else if (isNaN(parseFloat(num) && isFinite(num))) {
      num = +prompt('Введи число!');
      isNumber(num);
    }
  }

  isNumber();

  //Сравнивает число со сгенерированным
  function compair() {
    if (num === randomNumber){
      alert('Поздравляю, Вы угадали!!!');
    } else if(num === 0) {
      finish();
    } else {
      //Новая попытка угадать число
      if (num > randomNumber){
        num = +prompt('Загаданное число меньше. Попробуй отгадать снова');
        isNumber();
        compair();
      } else {
        num = +prompt('Загаданное число больше. Попробуй отгадать снова');
        isNumber();
        compair();
      }
    }
  }

  compair(num);
}

start();