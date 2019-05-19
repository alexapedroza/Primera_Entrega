let cursos = [{
    id: 1,
    nombre: 'Auditoria de sistemas',
    duracion: 40,
    valor: 100000
},
{
    id: 2,
    nombre: 'Ingles',
    duracion: 45,
    valor: 200000
},
{
    id: 3,
    nombre: 'Programacion',
    duracion: 60,
    valor: 250000
},
{
    id: 4,
    nombre: 'Bases de datos',
    duracion: 40,
    valor: 150000
}];

let opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}

module.exports = {
    cursos,
    opciones
};