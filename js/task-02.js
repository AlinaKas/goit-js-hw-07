
// Задание 2
// В HTML есть пустой список ul#ingredients.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().


const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listRef = document.querySelector('#ingredients');

const insertItemRef = ingredients.map((ingredient) => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
});

listRef.append(...insertItemRef);

console.log(listRef);




