console.log('metodos de array')
console.log('')
console.log('')

const titulo = 'array'
console.log(titulo)

let array = [1,2,4,6]
console.log(array)

console.log('')
console.log('triplo')
let triplo = array.forEach((e,index)=>{
 console.log(e*3 )
})

console.log('inseri')
let inseri = array.push(9)
console.log(array)

console.log('deleta')
let deleta = array.splice(3,1)
console.log(array)

console.log('filtra')
let filtra  = array.filter(e =>{
 console.log(e === 4 ? e *2 : e*1)
})

console.log('reduz')
array.push(6)
array.push(6)
console.log(array)
let reduz  =  array.reduce((anterior,proximo)=>{
 console.log(anterior + proximo)
})

console.log('mapeia')
let mapear = array.map(e => e*2)
console.log(mapear)

console.log('cada (metodo every)')
let cada = array.every( e =>{
 console.log( e +1)
})

console.log('cada (metodo some)')
let some = array.some( e=>{
 console.log(Math.pow(e,2) )
})

