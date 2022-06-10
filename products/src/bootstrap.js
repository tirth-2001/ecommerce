import faker from 'faker'

let products = []

for (let i = 0; i < 10; i++) {
	products.push({
		id: i,
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		description: faker.lorem.sentence(),
		image: faker.image.imageUrl(360, 360, 'product', true),
	})
}

let productsHTML = ''

products.forEach((product) => {
	productsHTML += `
        <div class="product">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>
            </div>
        </div>
    `
})

console.log('Products', products)

const mount = (el) => {
	el.innerHTML = productsHTML
}

// Situation 1
// In local development mode, we are running in isolation. We will surely have element with #products. In this case we will immediately render our app in that element
if (process.env.NODE_ENV === 'development') {
	const el = document.getElementById('dev-products')
	if (el) mount(el)
}

// Situation 2
// We are running this app in development or production through the container app. There is no guarantee that the #products element will be present or not. So we will not immediately render our app. But will wait for the element and then render our app.
export { mount }
