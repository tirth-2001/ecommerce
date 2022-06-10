import faker from 'faker'

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

const mount = (el) => {
	el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
	const el = document.getElementById('dev-cart')
	if (el) mount(el)
}

export { mount }
