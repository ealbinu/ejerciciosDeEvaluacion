//Iniciar jQuery - document.ready
$(document).ready(function(){
    
    $('section.secciones>.pure-g>.pure-u-3-4>a').click(function(){
    
        var irA = $(this).attr('href');
        
        $('section.secciones').scrollTo(irA, 350);
    
        $('.respuestasCorrectas').html( $('.progreso .correcto').length );
        
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
                ui.draggable('destroy');
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
    
    
    
    
    
    
    
    
    
    
    /* CONTESTA LA PREGUNTA */
    
    var contadorDeRespuestas = 0;
    var correctas = 0;
    $('#pregunta1 button').click(function(){
        var data = $(this).attr('data');
        
        if(data == 'correcta'){
            //alert('correcto');
            correctas+=1;
        } else {
            //alert('error');
        
        }
        
        //Se suma 1 al contador
        contadorDeRespuestas+=1;
        //Oculta todos los botones de #pregunta1
        $('#pregunta1 button').hide();
    
        evaluarRespuestasCorrectas(contadorDeRespuestas, correctas);
    });
    
    
    
    
    $('#pregunta2 button').click(function(){
        var data = $(this).attr('data');
        
        if(data == 'correcta'){
            //alert('correcto');
            correctas+=1;
        } else {
            //alert('error');
        
        }
        
        //Se suma 1 al contador
        contadorDeRespuestas+=1;
        //Oculta todos los botones de #pregunta1
        $('#pregunta2 button').hide();
    
        evaluarRespuestasCorrectas(contadorDeRespuestas, correctas);
    });
    
    
    
    
    
    
    
    
    
    
    /* UNE LAS LÍNEAS */
    var endpointops = { 
        isSource : true
    }
    var endpoint = jsPlumb.addEndpoint('unirperro', {
                                            anchor: "RightMiddle"
                                            }, endpointops);
    
    var endpoint2ops = {
        isTarget : true,
        beforeDrop : function(params){
            if(params.sourceId  == 'unirperro'){
                //alert('correcto');
                $('.progreso #e4').removeClass('error').addClass('correcto');
                return true;
            } 
        }
    }
    var comidagato = jsPlumb.addEndpoint('comidagato', {
                                            anchor: "LeftMiddle"
                                            }, endpoint2ops);
    
    
    
    var endpoint3ops = {
        isTarget : true,
        beforeDrop : function(params){
            if(params.sourceId  == 'unirperro'){
                //alert('error');
                $('.progreso #e4').removeClass('correcto').addClass('error');
                return true;
            } 
        }
    }
    var comidaperro = jsPlumb.addEndpoint('comidaperro', {
                                            anchor: "LeftMiddle"
                                            }, endpoint3ops);
    
    
    
    
    
    
    /* EJERCIO 5- ORDENAR */
    
    $('.ordenaritems').sortable({
        stop: function(event, ui){
            var item1 =  $('.ordenaritems li:nth-child(1)');
            var item2 =  $('.ordenaritems li:nth-child(2)');
            var item3 =  $('.ordenaritems li:nth-child(3)');
            var item4 =  $('.ordenaritems li:nth-child(4)');
            //evaluacion individual
            if(item1.attr('id') == 'accion1'){
                item1.removeClass('error').addClass('correcto');
            } else {
                item1.removeClass('correcto').addClass('error');
            }
            
            if(item2.attr('id') == 'accion2'){
                item2.removeClass('error').addClass('correcto');
            } else {
                item2.removeClass('correcto').addClass('error');
            }
            
            if(item3.attr('id') == 'accion3'){
                item3.removeClass('error').addClass('correcto');
            } else {
                item3.removeClass('correcto').addClass('error');
            }
            
            if(item4.attr('id') == 'accion4'){
                item4.removeClass('error').addClass('correcto');
            } else {
                item4.removeClass('correcto').addClass('error');
            }
            

            
            // evaluación general (correcto/error)
            if(
                item1.attr('id') == 'accion1' &&
                item2.attr('id') == 'accion2' &&
                item3.attr('id') == 'accion3' &&
                item4.attr('id') == 'accion4'
            ){
                //CORRECTO
                $('.ordenaritems').sortable("disable");
                $('.progreso #e5').removeClass('error').addClass('correcto');
                
                
                
                
                
                
            } else {
                //ERROR
                $('.progreso #e5').removeClass('correcto').addClass('error');
            }
            
        }   
    });
    $('.ordenaritems').disableSelection();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}); //Termina document.ready



function evaluarRespuestasCorrectas(contador, correctas){
    if(contador==2){
        if(correctas==2){
            //resultado correcto
            $('.progreso #e3').removeClass('error').addClass('correcto');
        } else {
            //resultado error
            $('.progreso #e3').removeClass('correcto').addClass('error');
        }
    }
}


