const listOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories:`, listOfCategories.length);
console.log('');

const listOfTitles = document.querySelectorAll('.item > h2');
const listOfSubcategories = document.querySelectorAll('.item > ul');

for (let i = 0; i < listOfTitles.length; i += 1) {
	console.log(`Category:`, listOfTitles[i].textContent);
	console.log('Elements:', listOfSubcategories[i].children.length);
	console.log('');
}
