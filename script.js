console.log('Задание - "b"');
console.log('');
console.log('');




let cart = receipt()
let dos = 9000
let order = 'Вы заказали: '

for(const key in cart) {
    order = order + ` ${key}`
    for(const newKey in cart[key]){
        order = newKey == 'info' ? order + ` ${cart[key][newKey]}` : order + ''
        dos = newKey == 'price' ? dos + cart[key][newKey] : dos
    }
}

console.log(`${order} | общая сумма ${dos} вместе с доставкой.`);