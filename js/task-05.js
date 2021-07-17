// Задание5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

// inputText.addEventListener('input', () => {
//     if (inputText.value === '') {
//         return outputText.textContent = 'незнакомец';
//     }
//     return outputText.textContent = inputText.value;
// });

inputText.addEventListener('input', () => {
    inputText.value === ''
        ? outputText.textContent = 'незнакомец'
        : outputText.textContent = inputText.value;
});