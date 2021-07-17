// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;
const decrement = () => counterValue -= 1;
const increment = () => counterValue += 1;


decrementBtn.addEventListener('click', () => {
    valueRef.textContent = decrement();
    console.log(counterValue);
});

incrementBtn.addEventListener('click', () => {
    valueRef.textContent = increment();
    console.log(counterValue);
});



