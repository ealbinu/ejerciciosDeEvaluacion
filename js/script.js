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
        var correcta  = $('.evaluar-letra input').attr('data-respuesta');
        
        //EVALUACION DE OPORTUNIDADES:
        var op1 = $('.evaluar-letra .op1');
        var op2 = $('.evaluar-letra .op2');
        if(op1.attr('data') == 0){
            //Primer oportunidad
            
            if(respuesta == correcta){
                //Respuesta correcta
                op1.removeClass('fa-square-o').addClass('fa-check-square');
                alert('correcta');
            } else {
                //Respuesta incorrecta
                op1.removeClass('fa-square-o').addClass('fa-minus-square');
                alert('incorrecta');
            }
            
        } else if(op2.attr('data') == 0){
            //Segunda oportunidad
            
        } else {
            //Ya no hay oportunidades
        }
            
    });

    
    
}); //Termina document.ready






