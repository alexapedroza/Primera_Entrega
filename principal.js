const cursos = require('./cursos').cursos;

console.log('-------------------------')
console.log('Cursos disponibles: '+cursos.length)
console.log('-------------------------')

/*cursos.forEach(element => {
        print(element)
});*/

for (i=0; i<cursos.length; i++){
    print(cursos[i], i)
}

function print(element, index) {
    setTimeout(function()
    {
        console.log('- El nombre del curso es '+element.nombre+ ' con identificador '+element.id 
            +' tiene una duracion de '+ element.duracion + ' horas y un costo de '+ element.valor + ' pesos colombianos.')
    }, 2000*index);          
}