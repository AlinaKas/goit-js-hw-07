// Задание 8
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {
    input: document.querySelector('#controls input'),
    createBtn: document.querySelector('[data-action = "render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesContainer: document.querySelector('#boxes'),
}
 let amount = 0;

const createBoxes = amount => {
    amount = Number(refs.input.value);
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.margin = `5px`;
        box.style.backgroundColor = '#' + getRandomColor();
        box.style.borderColor = `#000000`;
        box.style.borderStyle = `solid`;
        refs.boxesContainer.appendChild(box);
        console.log(box);

    }
    console.log(amount);
};
refs.createBtn.addEventListener('click', () => createBoxes(amount));


function destroyBoxes() {
    refs.boxesContainer.innerHTML = '';
    refs.input.value = '';
};

refs.destroyBtn.addEventListener('click', destroyBoxes);


function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}


