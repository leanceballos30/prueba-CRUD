class Producto{
    constructor(producto, descripcion, codigo, precio, url){//creo las clases
        this.producto = producto
        this.descripcion = descripcion
        this.codigo = codigo
        this.precio = precio
        this.url = url;
    }
}
// obtengo los input de las variables

// ahora paso a capturar por ID los imput

let inputCodigo = document.getElementById(`inputCodigo`)
let inputDescripcion = document.getElementById(`inputDescripcion`)
let inputProducto = document.getElementById(`inputProducto`)
let inputPrecio = document.getElementById(`inputPrecio`)
let inputURL = document.getElementById(`inputURL`)

let form = document.getElementById(`form`)
// creo un array donde voy a guardar los productos (JSON.parse compara si ya hay algo guardado en Local Storage)
let arrProductos = JSON.parse(localStorage.getItem("listaProductos")) || []




// ahora creamos la funcion que escucha al evento, esa constante (tb funcion) se llamara handleSubmit

const handleSubmit=(e)=>{
    e.preventDefault();   
    // agrego nueva instancia para nuevo producto   
    const nuevoProducto = new Producto (inputCodigo.value, inputDescripcion.value, inputProducto.value, inputPrecio.value, inputURL.value)
    console.log(nuevoProducto);
    arrProductos.push(nuevoProducto)
    // transformo el objeto en array, para guardar en LocalStorage, que es como lee
    localStorage.setItem("listaProductos", JSON.stringify(arrProductos)) 
    //necesito resetear el formulario para seguir cargando datos
    form.reset();
    // utilizo WindowsReload para que los productos que voy cargando se actualicen sin necesidad de recargar la pagina
    window.location.reload();    
}
console.log(arrProductos);

// ahora creamos como escuchar el evento. lo hago desde la etiqueta form (el padre de todos los input)

form.addEventListener("submit", handleSubmit)
