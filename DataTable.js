$(function() {

    $('#example').DataTable( {
        language: {
            processing:     "Processando...",
            search:         "Pesquisar",
            lengthMenu:     "Mostrar _MENU_ registros",
            info:           "Mostrando _START_ à _END_ de _TOTAL_ registros",
            infoEmpty:      "",
            infoFiltered:   "(Filtro de _MAX_ no total)",
            infoPostFix:    "",
            loadingRecords: "Carregando...",
            zeroRecords:    "Tabela vazia",
            emptyTable:     "Nenhum dado disponível na tabela",
            paginate: {
                first:      "Primeiro",
                previous:   "Anterior",
                next:       "Próximo",
                last:       "Último"
            },
            aria: {
                sortAscending:  ": Ativar coluna em ordem crescente",
                sortDescending: ": Ativar coluna em ordem decrescente"
            }
        }
    } );


});