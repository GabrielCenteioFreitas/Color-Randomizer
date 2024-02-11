function changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    $("body").css("background-color", color);
    $("#codigo_cor").text(color);
    return color
}

function copyText() {
    let textoCopiado = document.getElementById("codigo_cor");
        let range = document.createRange();
        range.selectNodeContents(textoCopiado);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        
        alert('Código da cor copiado!')
}
