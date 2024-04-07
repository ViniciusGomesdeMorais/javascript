
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora <= 12) {
        img.innerHTML = img.src= "manha.png"
        document.body.style.background = '#475700'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = img.src= "tarde.png"
        document.body.style.background = '#EE9342'
    } else if (hora >=18 && hora <=23) {
        img.innerHTML = img.src= "noite.png"
        document.body.style.background = '#060B17'
    } else { 
        img.innerHTML = img.src= "madrugada.png"
        document.body.style.background = '#002B4E'

    }
}
