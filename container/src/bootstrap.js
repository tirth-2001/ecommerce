import { mount as ProductMount } from 'products/ProductsIndex1'
import { mount as CartMount } from 'cart1/CartIndex'

console.log('Container')

ProductMount(document.getElementById('products'))
CartMount(document.getElementById('cart'))
