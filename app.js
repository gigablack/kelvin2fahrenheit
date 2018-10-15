//temperature in kelvin degrees
let kelvin = 0
//temperature in celsius degrees
let celsius = kelvin - 273
//temperature in fahrenheit degrees
let fahrenheit = celsius * (9/5) + 32
//temperature in fahrenheit degrees (rounded)
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`)