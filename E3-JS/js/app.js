const pizzas = [{
    id: 1,
    nombre: "muzzarella",
    ingredientes: "salsa de tomate, muzzarella",
    precio: 500
},
{
    id: 2,
    nombre: "margarita",
    ingredientes: "salsa de tomate, albahaca, muzzarella",
    precio: 900
},
{
    id: 3,
    nombre: "cuatro quesos",
    ingredientes: "mozzarella, gorgonzola, parmesano, fontina",
    precio: 1200
},
{
    id: 4,
    nombre: "pepperoni",
    ingredientes: "salsa de tomate, muzzarella, pepperoni, albahaca",
    precio: 1300
},
{
    id: 5,
    nombre: "champiñones",
    ingredientes: "salsa de tomate, muzzarella, portobellos, champiñones",
    precio: 1600
},
{
    id: 6,
    nombre: "fugazza",
    ingredientes: "cebolla, muzzarella, aceitunas",
    precio: 1300
}
];


// Variables
const clickBtn = document.querySelector('.clickBtn');
const input = document.querySelector('#input');

const nombrePizza = document.querySelector('.pizza-nombre');
const precioPizza = document.querySelector('.pizza-precio');

const divError = document.querySelector('.error');

cargarEventListeners()

function cargarEventListeners() {
    clickBtn.addEventListener('click', filtrarID);
}

function filtrarID() {
    let resultado = input.value
    resultado--

    if (input.value === '') {
        divError.textContent = 'Debe ingresar un numero para continuar, intente nuevamente.';
        setTimeout(() => {
            divError.textContent = '';
        }, 3000);
    } else if (input.value >= pizzas.length) {
        divError.textContent = 'Numero invalido, no se encuentra en la base de datos. Intente con un numero menor.';
        setTimeout(() => {
            divError.textContent = '';
        }, 3000);
        borrarHTML();
    } else {
        mostrarHTML(resultado);
    }
}

function mostrarHTML(id) {
    nombrePizza.innerHTML = `La pizza seleccionada es: ${pizzas[id].nombre}`;
    precioPizza.innerHTML = `Y su precio $${pizzas[id].precio}`;
}

function borrarHTML() {
    nombrePizza.innerHTML = '';
    precioPizza.innerHTML = '';
}