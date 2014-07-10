<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Ejercicios de evaluación</title>
    <link rel="stylesheet" href="style.css">
    <!--pusecss-->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
<!--jqueri ui-->
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
<!-- fontawesome -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>

<!-- INICIO - HEADER -->

<!-- .pure-g>.pure-u-1-8+.pure-u-3-4+.pure-u-1-8 -->
<div class="pure-g">
    <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
        <h1>Evaluación en línea</h1>
    </div>
    <div class="pure-u-1-8"></div>
</div>

<div class="pure-g">
    <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
        <h2>Progreso</h2>
        <div class="progreso">
            <div id="e1"></div>
            <div id="e2"></div>
            <div id="e3"></div>
            <div id="e4"></div>
            <div id="e5"></div>
        </div>
    </div>
    <div class="pure-u-1-8"></div>
</div>

<!-- agrupa todas las secciones -->
<section class="secciones">



<!-- seccion HOME -->
<div class="pure-g" id="e00">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
        <p>Bienvenido al curso en línea impartido en la clase de materiales educativos para la web.</p>
        <!-- a.pure-button.pure-button-primary -->
        <a  href="#e01"            
            class="pure-button pure-button-primary">
            <i class="fa fa-cubes"></i>
            Iniciar curso
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>







<!-- seccion evaluacion -->
<div class="pure-g" id="e01">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3><i class="fa fa-spin fa-circle-o-notch fa-fw"></i> Ejercicio 1</h3>
        <p>Coloca la letra que falta.</p>
        
        <hr>
        <div class="material pure-g">
           
            <div class="pure-u-1-2">
               
                <p>El perro que vino de visita a la casa abrió una caja que tenía letras. Al parecer se comió una.</p>
                <p>Al hacer el recuento de daños, resultó que nos faltaba la quinceava letra del abecedario.</p>
            </div>
            <div class="pure-u-1-2">
                <form class="pure-form evaluar-letra">
                    <fieldset>
                       <br>
                       
                        <!-- campo de respuesta -->
                        <input type="text"
                            placeholder="Escribe la letra que falta"
                            data-respuesta="ñ">
                        <!-- boton de evaluar -->
                        <button type="submit"
                            class="pure-button">Evaluar respuesta</button>
                        <!-- oportunidades -->
                        <i class="fa fa-square-o op1" data="0"></i>
                        <i class="fa fa-square-o op2" data="0"></i>
                        <br><br>
                        <hr>
                        <!-- instrucciones de oportunidades -->
                        <p>Tienes dos oportunidades para acertar en la respuesta</p>
                    </fieldset> <!-- cierra fieldset -->
                </form> <!-- cierra form -->
            </div> <!-- cierra .pure-u-1-2 -->
            
        </div>
        <hr>
        
        
        <!-- a.pure-button.pure-button-primary -->
        <a  href="#e00"            
            class="pure-button pure-button-primary">
            <i class="fa fa-arrow-left"></i>
            Regresar
        </a>
        <a  href="#e02"            
            class="pure-button pure-button-primary">
            Siguiente
            <i class="fa fa-arrow-right"></i>
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>









<!-- seccion evaluacion -->
<div class="pure-g" id="e02">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3><i class="fa fa-spin fa-circle-o-notch fa-fw"></i> Ejercicio 2</h3>
        <p>Arrastra el objeto a su contenedor.</p>
        <!-- a.pure-button.pure-button-primary -->
        
        <div class="material pure-g">
            <div class="pure-u-1-1">
                <div class="perro">
                    <img src="img/perro.gif" alt="">
                </div>
                <div class="doghouse">
                    <img src="img/doghouse.png" alt="">
                    <i class="fa fa-square-o respuesta"></i>
                </div>
                <div class="cathouse">
                    <img src="img/cathouse.png" alt="">
                    <i class="fa fa-square-o respuesta"></i>
                </div>
                
            </div>
        </div>
        
        
        <a  href="#e01"            
            class="pure-button pure-button-primary">
            <i class="fa fa-arrow-left"></i>
            Regresar
        </a>
        <a  href="#e03"            
            class="pure-button pure-button-primary">
            Siguiente
            <i class="fa fa-arrow-right"></i>
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>









<!-- seccion evaluacion -->
<div class="pure-g" id="e03">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3><i class="fa fa-spin fa-circle-o-notch fa-fw"></i> Ejercicio 3</h3>
        <p>Elige la respuesta correcta.</p>
        
        
        <div class="material pure-g">
            <div class="pure-u-1-2" id="pregunta1">
                ¿Qué come un perro?
                <br><br>
                <!-- button.pure-button[tab] -->
                <button class="pure-button">Tornillos</button>
                <button class="pure-button" data="correcta">Croquetas</button>
                <button class="pure-button">Chocolate</button>
                <br><br><br>
            </div>
        
            
            
            
            <div class="pure-u-1-2" id="pregunta2">
                ¿Cuánto debe dormir un perro al día?
                <br><br>
                <!-- button.pure-button[tab] -->
                <button class="pure-button">8 horas</button>
                <button class="pure-button" data="correcta">18 horas</button>
                <button class="pure-button">Más de 18 horas</button>
                <br><br><br>
            </div>
            <div class="pure-u-1-2">
                
            </div>
            
            
        </div>
        
        <!-- a.pure-button.pure-button-primary -->
        <a  href="#e02"            
            class="pure-button pure-button-primary">
            <i class="fa fa-arrow-left"></i>
            Regresar
        </a>
        <a  href="#e04"            
            class="pure-button pure-button-primary">
            Siguiente
            <i class="fa fa-arrow-right"></i>
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>


    
    
    
    
    
    
<!-- seccion evaluacion -->
<div class="pure-g" id="e04">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3><i class="fa fa-spin fa-circle-o-notch fa-fw"></i> Ejercicio 4</h3>
        <p>Une con una línea los objetos correspondientes.</p>
        <!-- a.pure-button.pure-button-primary -->
        
        
        
        
        
        
        
        <div class="pure-u-1-1" id="jsplumbcontainer">
            <div class="unirperro" id="unirperro">
                <img src="img/perro.gif">
            </div>
            <div class="comidagato" id="comidagato">
                <img src="img/comidagato.jpg">
            </div>
            <div class="comidaperro" id="comidaperro">
                <img src="img/comidaperro.jpg">
            </div>
        </div>
        
        
        
        
        
        
        
        
        <a  href="#e03"            
            class="pure-button pure-button-primary">
            <i class="fa fa-arrow-left"></i>
            Regresar
        </a>
        <a  href="#e05"            
            class="pure-button pure-button-primary">
            Siguiente
            <i class="fa fa-arrow-right"></i>
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>
    
    
    
    
    
    
    
<!-- seccion evaluacion -->
<div class="pure-g" id="e05">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3><i class="fa fa-spin fa-circle-o-notch fa-fw"></i> Ejercicio 5</h3>
        <p>Acomoda las cajas en orden.</p>
        <!-- a.pure-button.pure-button-primary -->
        <a  href="#e04"            
            class="pure-button pure-button-primary">
            <i class="fa fa-arrow-left"></i>
            Regresar
        </a>
        <a  href="#e06"            
            class="pure-button pure-button-primary">
            Terminar
            <i class="fa fa-arrow-right"></i>
        </a>
    </div>
    <div class="pure-u-1-8"></div>
</div>    
    
    
    
    
    
<!-- seccion evaluacion FINAL -->
<div class="pure-g" id="e06">
   <div class="pure-u-1-8"></div>
    <div class="pure-u-3-4">
       <h3> Evaluación</h3>
        <p>Obtuviste X respuestas correctas.</p>
        <!-- a.pure-button.pure-button-primary -->
        <a  href="#e00"            
            class="pure-button pure-button-primary">
            <i class="fa fa-reply"></i>
            Volver a intentar
        </a>
        
    </div>
    <div class="pure-u-1-8"></div>
</div> 
    

</section> <!-- cierra section.secciones -->
    
    
    
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
<!-- scrollto.js -->
<script src="js/jquery-scrollto.js"></script>
<!-- JsPlumb -->
<script src="js/jquery-jsplumb.js"></script>
<!-- nuestro script -->
<script src="js/script.js"></script>

</body>
</html>