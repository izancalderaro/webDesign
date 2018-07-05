$(function () {
    var nome = $('#nome');
    var btn1 = $('#btn1');
    var lista = $('#lista');
    
    nome.on('keyup', function (e) {
        if (e.keyCode == 13) {
            //alert('keyUp funcionando');
            nome.trigger('enter',nome.val());  
            nome.val(''); //deixa o campo limpo(vazio)         
        }
    });

    nome.on('enter', function (evento, texto) {
        lista.append('<li>'+texto+'</li>');           
    });

});