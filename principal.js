const {cursos, opciones}  = require('./cursos');
const crearArchivo = require('./crearArchivo').crearArchivo;

const argv = require('yargs')
.command ('inscribir', 'Inscribirme en un curso', opciones)
.argv

/*
    Realiza el proceso de impresion de la informacion de cursos disponibles
*/
function print() {
    console.log(' Contamos con '+cursos.length+' cursos disponibles \n')
    for (i=0; i<cursos.length; i++){
        let element = cursos[i];
        setTimeout(function()
        {
            console.log('- El identificador del curso ['+element.id+ '] con nombre ['+element.nombre 
                +'] tiene una duracion de ['+ element.duracion + '] horas y un costo de ['+ element.valor + '] pesos colombianos.')
        }, 2000 * i);          
    }
}

/*
    Realiza la bùsqueda del curso seleccionado y verifica que exista el mismo.
*/
function searchCourse(id) {
    console.log("Verficando en el sistema la informacion del curso ingresado..."+"\n");

    let courseFinded = cursos.find(course => course.id == id);
    return courseFinded;   
}

/*
    Realiza el proceso de inscripcion al curso seleccionado.
*/
function inscription(argv) {
    let {id, nombre, cedula} = argv;

    let estudiante = {
        nombre: nombre,
        cedula: cedula
    }
    
    console.log("Has seleccionado el identificador de curso ["+id+"] para el/la estudiante ["+nombre+"] con cedula ["+cedula+"]");

    let courseFinded = searchCourse(id);

    if(courseFinded){
        console.log('----------------------------------------------------------------------------------------------------------------------------------')
        console.log("Curso encontrado: ["+courseFinded.id+"] - "+courseFinded.nombre +" - duraciòn: "+courseFinded.duracion + " horas - costo: "+courseFinded.valor +" pesos.");

        crearArchivo(courseFinded, estudiante)

    }else{
        console.log("----------------------------------------------------------------------------------------------------------------------------------");
        console.log("Error: \n");
        console.log("- El curso con identificador ["+id+"] no fue encontrado, por favor verifique la informacion diligenciada e intente nuevamente.");
        console.log("----------------------------------------------------------------------------------------------------------------------------------")
    }
}


if (argv.id) {    
    console.log("----------------------------------------------------------------------------------------------------------------------------------")
    console.log(' Realizando proceso de inscripciòn de cursos ')
    console.log('---------------------------------------------------------------------------------------------------------------------------------- \n');
    inscription(argv);    
} else {
    console.log('----------------------------------------------------------------------------------------------------------------------------------')
    console.log(' Realizando consulta de cursos disponibles ')
    console.log('---------------------------------------------------------------------------------------------------------------------------------- \n');
    print();
}


