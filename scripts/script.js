function calcular() {
    var txt0 = document.getElementById('bolha').value
    var txt1 = document.getElementById('foil').value
    let txt2 = document.getElementById('foilp').value
    var txt3 = document.getElementById('latex').value
    var res = document.getElementById('res')
    var radio = document.getElementsByName('base')
    var entrega = document.getElementById('entrega')
    var bolha = Number(txt0) * 85
    var foil = Number(txt1) * 27
    let foilp = Number(txt2) * 36
    var latex = Number(txt3) * 18
    var b
    var e
    let tx = 28
    if (txt0.length == 0 & txt1.length == 0 & txt2.length == 0 & txt3.length == 0) { alert('Informe a Quatidade!')} else {
    if (entrega.checked == true) {
        e = 10
    } else {
        e = 0
    }
    if (radio[0].checked == true) {
        b = 10
    } else if (radio[1].checked == true) {
        b = 15
    }
    else { b = 0 }

    var r = bolha + foil + foilp + latex + b + e + tx
    res.innerHTML = `O seu buquê custa ${r.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais.`
}
}