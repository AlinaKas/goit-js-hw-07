// Задание7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.


const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');

inputRef.addEventListener('input', () => {
    textRef.style.fontSize = `${inputRef.value}px`;
});




