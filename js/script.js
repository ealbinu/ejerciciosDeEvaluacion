//Iniciar jQuery - document.ready
$(document).ready(function(){
    
    $('section.secciones>.pure-g>.pure-u-3-4>a').click(function(){
    
        var irA = $(this).attr('href');
        
        $('section.secciones').scrollTo(irA, 350);
    
    });
    
    
    
    
    
    /* EVALUACIONES */
    
    /* LETRA */
    $('.evaluar-letra').submit(function(){
      
        
        var respuesta = $('.evaluar-letra input').val();
        respuesta = respuesta.toLowerCase();
        var correcta  = $('.evaluar-letra input').attr('data-respuesta');
        
        //EVALUACION DE OPORTUNIDADES:
        var op1 = $('.evaluar-letra .op1');
        var op2 = $('.evaluar-letra .op2');
        if(op1.attr('data') == 0){
            //Primer oportunidad
            
            if(respuesta == correcta){
                //Respuesta correcta
                $('.progreso #e1').removeClass('error').addClass('correcto');
                op1.removeClass('fa-square-o').addClass('fa-check-square');
                op1.attr('data',1);
                $('.evaluar-letra button').hide();
                $('.evaluar-letra input').prop('disabled', true);
                //alert('correcta');
            } else {
                //Respuesta incorrecta
                $('.progreso #e1').removeClass('correcto').addClass('error');
                op1.removeClass('fa-square-o').addClass('fa-minus-square');
                op1.attr('data',1);
                //alert('incorrecta');
            }
            
        } else if(op2.attr('data') == 0){
            //Segunda oportunidad
            
            if(respuesta == correcta){
                //Respuesta correcta
                $('.progreso #e1').removeClass('error').addClass('correcto');
                op2.removeClass('fa-square-o').addClass('fa-check-square');
                op2.attr('data',1);
                $('.evaluar-letra button').hide();
                $('.evaluar-letra input').prop('disabled', true);
                //alert('correcta');
            } else {
                //Respuesta incorrecta
                $('.progreso #e1').removeClass('correcto').addClass('error');
                op2.removeClass('fa-square-o').addClass('fa-minus-square');
                op2.attr('data',1);
                //alert('incorrecta');
            }
            
        } else {
            //Ya no hay oportunidades
        }
        
        //Termina submit de formulario
        return false;
        
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* ARRASTRA EL OBJETO */
    $('.perro').draggable();
    
    $('.cathouse').droppable({
        drop: function(event, ui){
            //alert('cat');
            if(ui.draggable.hasClass('perro')){
                //alert('ERROR');
                $('.progreso #e2').removeClass('correcto').addClass('error');
                $(this).children('.respuesta')
                        .removeClass('fa-square-o')
                        .addClass('fa-minus-square');
            }
        }
    });
    
    $('.doghouse').droppable({
        drop: function(event, ui){
            //alert('dog');
            if(ui.draggable.hasClass('perro')){
                //alert('CORRECTO');
                $('.progreso #e2').removeClass('error').addClass('correcto');
                $(this).children('.respuesta')
                        .removeClass('fa-square-o')
                        .addClass('fa-check-square');
                ui.draggable('destroy');
            }
        }
    });
    
    
    
    
    
    
    
    
}); //Termina document.ready






