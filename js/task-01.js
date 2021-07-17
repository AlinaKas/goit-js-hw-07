const itemsQuantityRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsQuantityRef.length} категории.`);

const getNumberCategories = category => {

    const titleCategoryRef = category.querySelector('h2').textContent;

    const numberCategoriesRef = category.querySelectorAll('li').length;

    return `Категория: ${titleCategoryRef}.
    Количество элементов: ${numberCategoriesRef}`
}
itemsQuantityRef.forEach(category => console.log(getNumberCategories(category)));



