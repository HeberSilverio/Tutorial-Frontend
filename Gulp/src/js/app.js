const numbers = [2, 3, 4, 'oi', true]

let s = sum(numbers)
let m = s / numbers.length

document.querySelector("#output").innerHTML = `média: ${m}`