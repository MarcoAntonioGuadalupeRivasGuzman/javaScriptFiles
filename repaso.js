//let vs var vs const

//no usar var porque es viejo
let nombre='Steve'; //usar let cuando se que el valor puede cambiar
const apellido='Wozniak'; //usar const cuando el valor no cambia

console.log(nombre,apellido);

if(true){
    let nombre='Peter'; //aqui encuentra el scope de la variable
    console.log(nombre); //esta varieable solo existe dentro del if
}

console.log(nombre);

//template literales

const firstName='Peter';
const lastName='Parker';


const fullName=`${firstName} ${lastName}`; //asi se puede usar un template string

console.log(fullName);

//obejto literal

const persona={ //asi se declara un objeto
    apodo: 'Steve',
    alias: 'Wozniak',
    edad: 24,
    direction: {
        ciudad: 'New York',
        postal: 4654
    }
}

const persona2 = {...persona}; //con esto se crea un nuevo objeto, ya que asi se rompe la referencia al objeto persona
persona2.alias='Alan'

console.log(persona);
console.log(persona2);

//arelgos 

const lista=[1,2,3,4,5]; //asi se declara un arreglo

lista.push(6); //asi se puede agregar un elemento a un arreglo

const lista2=[...lista]; //asi se puede clonar un arreglo usando el operador spread

lista2.push(7);

const lista3=lista2.map(num=>num*2); //con esto duplicacmos los elementos y ademas creamos un nuevo arreglo

console.log(lista);
console.log(lista2);
console.log(lista3);
