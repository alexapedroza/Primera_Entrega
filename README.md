# Nuestro primer proyecto

Proceso de instalaciòn:
* Ejecutar el comando git clone https://github.com/alexapedroza/Primera_Entrega.git
* Ingresar a la carpeta Primera_Entrega y Ejecutar el comando npm install


Proceso de ejecucion:
* Para realizar la consulta de los cursos ofertados ejecutar el comando *__node principal__*
* Para realizar el proceso de inscripcion a cursos ofertados ejecutar el comando *__node principal inscribir__* e ingresar las variables requeridas para el proceso, ejemplo: *__node principal inscribir -i=2 -n=Jenny -c=1234__* donde *i* hace referencia al identificador del curso, *n* al nombre del estudiante y *c* al numero de cedula del estudiante. En caso de ingresar un nombre completo, ingresarlo entre comillas (") ejemplo: *__node principal inscribir -i=3 -n="Jenny Pedroza" -c=1234__* .

Comportamiento funcional:
* En caso de no ingresar las variables requeridas el sistema le notificarà que variables faltan y cuales son requeridas, para nuestro caso todas son requeridas.
* En caso tal de ingresar un id de curso incorrecto, el sistema mostrarà un mensaje indicando que el curso no existe, en caso contrario, si la informacion ingresada es correcta, se creara un archivo llamado __matricula.txt__ en el cual se registrarà las informaciòn del curso junto con la del estudiante.
    
