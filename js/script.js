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
                op1.attr('data',1);
                //alert('correcta');
            } else {
                //Respuesta incorrecta
                
                op1.removeClass('fa-square-o').addClass('fa-minus-square');
                op1.attr('data',1);
                //alert('incorrecta');
            }
            
        } else if(op2.attr('data') == 0){
            //Segunda oportunidad
            
            if(respuesta == correcta){
                //Respuesta correcta
                
                op2.removeClass('fa-square-o').addClass('fa-check-square');
                op2.attr('data',1);
                //alert('correcta');
            } else {
                //Respuesta incorrecta
                
                op2.removeClass('fa-square-o').addClass('fa-minus-square');
                op2.attr('data',1);
                //alert('incorrecta');
            }
            
        } else {
            //Ya no hay oportunidades
        }
            
    });

    
    
}); //Termina document.ready






