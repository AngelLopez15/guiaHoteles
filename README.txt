Inicio del proyecto

¡¡¡¡¡¡¡IMPORTANTE!!!!!!!

**********************************************************************************************************
Hola compañer@s que para las practicas de la semana 3 en especial las referentes a
los Popovers y Tooltips. Estos componenetes ocupan de Popper para funcionar
y a su vez popper necesita de Jquery entonces si instalaron Jquery y Pooper como 
en los videos de este curso estos componenetes no les va a funcionar. 
Esto es debido a que lamentablemente Bootstrao 4 utiliza versiones de Popper y Jquery 
pasadas. Si instalaron como en los videos la version de Popper y Jquery que tienen 
no son las versiones con las que Bootstrap funciona.

Para que puedan hacer la practica pueden hacer dos cosas.
1-Ocupar directamente las CND como nos dice la documentacion oficial
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
pero con el riesgo de que los demas compañeros los califiquen mas por no usar la carpeta node_modules

2-O si quieren los archivos de forma local pueden entrar a la URL de las versiones especificas
	https://code.jquery.com/jquery-3.5.1.slim.min.js
	https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js
en su navegador se abrira una pagina con un monton de letras innentendible pero solo es codigo
java Script minificado. Denle click derecho en cualquier lugar de la pagina luego en "Guardar como"
borren el nombre que les pone por default y escriban jquery.js y popper.js respectivamente.
Estos archivos ya son los correctos para que Bootstrap funcione y ya la pueden guardar en la carpeta
de Jquery y Popper de la carpeta node_modules. Pueden borrar los demas archivos que tengan esa carpeta
y solo dejar lo que acabas de descargar para no confundirte.

3-Aqui en mi repositorio dejare los archivos popper.js y jquery.js correctos por si no entendiste
mi explicacición. Tambien seria bueno que pasaras el este mensaje en el codigo HTML de tu proyecto
para avisar a los demas compañeros del curso. Saludos 
************************************************************************************************************

NOTA FINAL: Para la ultima practica ocupe el task runner de Grunt es el unicoque funcioona si se sigue el tutorial ya que Gulp
	    al parecer cambio su configuracion y ya no sirve como nos enseñan en el video.
	    Si ocupan Grunt no instalen filerev ni lo referencien en el contenido del gruntfile por que no funciona y no creo
	    bien los archivos para "dist" si la quietan todo funciona perfectamente.

**************************************
*****Página hecha por Angel López*****
*******Twitter: AO_lopez**************
****Curso de diseño web Bootstrap4****
*De la especialidad de desarrollo web*
*************Full Stack***************
**************************************