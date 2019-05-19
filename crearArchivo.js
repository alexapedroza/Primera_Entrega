const fs = require('fs');

let crearArchivo = (curso, estudiante) => {
    texto = 'El estudiante [' + estudiante.nombre + '] con cedula de ciudadania [' + estudiante.cedula +']'+'\n'+'se ha matriculado en el curso ['+curso.nombre+']'
    +'\n'+'el cual tiene una duracion de ['
    +curso.duracion +'] horas y un costo de ['+curso.valor+ '] pesos.';

    fs.writeFile('matricula.txt', texto, (err) =>{
        if (err) throw (err);
        console.log('Se ha realizado la matricula de forma exitosa para el/la estudiante ['+estudiante.nombre+'] y se ha creado el archivo matricula.txt \n');
    }
    )
}

//crearArchivo(curso, estudiante);

module.exports = {
    crearArchivo
};