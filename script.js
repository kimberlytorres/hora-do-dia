function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imgs/manha.png'
        document.body.style.background = '#cab887'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#778ead'
    } else {
        //BOA NOITE!
        img.src = 'imgs/noite.png'
        document.body.style.background = '#245b77'
    }
}
