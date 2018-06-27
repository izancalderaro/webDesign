$(function () {
  $('.needs-validation').on('submit', function (event) {
    if (event.currentTarget.checkValidity() === false) { // mesmo que 'this'
      event.preventDefault();
      event.stopPropagation();
      $('.needs-validation').addClass('was-validated');
    }
  });


  $('#btnOS').on('click', function () {

    // alert('teste');

    $('.needs-validation').each(function () {      
      this.reset(); 
    });
    
    $('.needs-validation').removeClass('was-validated');

  });

  
    $('[data-toggle="tooltip"]').tooltip()

});