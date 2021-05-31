	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		price: 10.00
	},{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 12.35
	},{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: false,
		nutFree: true,
		organic: true,
		price: 5.99
	},
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 1.35
	},
	{
		name: "Chips",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 14.00
	},{
		name: "Chocolate",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: false,
		organic: false,
		price: 21.99
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 3.35
	},{
		name: "Carrot",
		vegetarian: true,
		glutenFree: true,
		lactoseIntolerant: true,
		nutFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Apple Pie",
		vegetarian: true,
		glutenFree: false,
		lactoseIntolerant: true,
		nutFree: true,
		organic: false,
		price: 23.35
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicRequirement) {
	prods.sort(function(a, b){return a.price-b.price});
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if (!organicRequirement || prods[i].organic){
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name );
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name );
		}
		else if ((restriction == "LactoseIntolerant") && (prods[i].lactoseIntolerant == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name );
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}}
	}
	
	
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function price(chosenProduct){
		for (let i=0; i<products.length; i+=1) {
		if (chosenProduct==products[i].name) {
			return products[i].price;
		}
	}
	
}
