
//checkbox
$(function () {

    var CheckboxDentroDoTbody = $('tbody :input[type=checkbox]');

    $('#todos').on('change', function () {
        //alert('change');
    })

    $('#todos').on('click', function () {

        CheckboxDentroDoTbody.prop('checked', this.checked);
        marcarTodasAsLinhas();
        // alert('clicado');
    });

    CheckboxDentroDoTbody.on('click', function () {

        //var total = CheckboxDentroDoTbody.prop('checked').length; //total indefinido
        //var total = this.checked.length;  //total indefinido
        //var total = $('tbody :input[type=checkbox]:checked').length; //total definido
        var total = CheckboxDentroDoTbody.filter(':checked').length; // filtra os elementos já retornados na opção acima ele vai novamente no DOM buscar os elementos
        var checar = CheckboxDentroDoTbody.length === total;
        $('#todos').prop('checked', checar);
        console.log('total', total);
    });

    CheckboxDentroDoTbody.on('change', function (evento) {
        var elemento = $(evento.target);
        elemento.parents('tr').toggleClass('selecionado');
        //marcarTodasAsLinhas();
        console.log('evento', elemento);
    });

    function marcarTodasAsLinhas() {
        // if ($('#todos').is(':checked')) {
        //     $('tbody tr').addClass('selecionado');
        // }
        // else {
        //     $('tbody tr').removeClass('selecionado');
        //}

        //ou assim
       
        CheckboxDentroDoTbody.filter(':checked').parents('tr').addClass('selecionado');
        CheckboxDentroDoTbody.filter(':not(:checked)').parents('tr').removeClass('selecionado');
    
    }    

});


