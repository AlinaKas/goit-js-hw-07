// Задание6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.getAttribute('data-length'));

const validationInput = () => {
    if (inputRef.value.length === inputLength) {
        return inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid');
    };
    return inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid');
};
inputRef.addEventListener('blur', validationInput);