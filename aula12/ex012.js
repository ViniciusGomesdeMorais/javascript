var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas ${minutos} minutos e ${segundos} segundos.`)
console.log(`Ou simplismente ${hora}:${minutos}:${segundos} h.`)
if (hora <=5) {
    console.log('Boa Madrugada!')
}else if (hora <=12) {
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 
console.log('"Quanto ao dia e à hora ninguem sabe, nem os anjos do céus, nem o filho, senão somente o Pai." Mateus 24:36')
