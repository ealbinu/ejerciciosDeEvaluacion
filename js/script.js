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
                alert('correcta');
            } else {
                //Respuesta incorrecta
                alert('incorrecta');
            }
            
        } else if(op2.attr('data') == 0){
            //Segunda oportunidad
            
        } else {
            //Ya no hay oportunidades
        }
        
        
        
        
        
        
        
        
        
        
    });

    
    
}); //Termina document.ready






