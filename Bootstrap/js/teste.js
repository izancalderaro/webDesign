
//checkbox
$(function () {

    var CheckboxDentroDoTbody = $('tbody :input[type=checkbox]');

    $('#todos').on('click', function () {

        // if (this.checked) {

        //     $('tbody :input[type=checkbox]').prop('checked', true);

        // } else {

        //     $('tbody :input[type=checkbox]').prop('checked', false);
        // }

        CheckboxDentroDoTbody.prop('checked', this.checked);
        
        $('tbody tr').toggleClass('selecionado');

    });


    CheckboxDentroDoTbody.on('click', function () {

        //var total = $('tbody :input[type=checkbox]:checked').length;
        var total = CheckboxDentroDoTbody.filter(':checked').length;
        var checar = CheckboxDentroDoTbody.length === total;

        $('#todos').prop('checked', checar);

        console.log('total', total);

    });


    CheckboxDentroDoTbody.on('change', function (evento) {

        var elemento = $(evento.target);
        
        elemento.parents('tr').toggleClass('selecionado');
        
        console.log('evento', elemento);
    });

});

