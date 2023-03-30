/* 
## seletores:

### Simples
    $('tag html') - Seleciona a tag
    $('.item-class') - Seleciona a class
    $('#item-class') - Seleciona o id

### Compostos
    $('h1, h3')
    $('div h2')
  
### Exemplos
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    // $('.featured-item:first h4').css('color', '#f00')
    // $('.featured-item:first h4').css ({
        'color' : '#f00',
        'background' : '#f00',
        'font-weight' : '#f00'
        })      

*/
 $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
/*
$('.featured-item h4').append('<span class="badge rounded-pill bg-info">Valorant</span> ')
$('.featured-item h4').after('Camisa tradicional algodão fio 30')
$('.featured-item a').addClass('btn btn-primary')
*/