const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsList = [];

ingredients.forEach(element => {
	const ingredient = document.createElement('li');
	ingredient.textContent = element;
	ingredient.classList.add('item');
	ingredientsList.push(ingredient);
});

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...ingredientsList);
