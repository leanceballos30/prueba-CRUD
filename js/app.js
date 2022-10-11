//==//==> comienzo el Creat del Crud //////////////////////////////////////////
// tengo que extraer los datos de LocalStorage desde admin.js

let listaProductosLS = JSON.parse(localStorage.getItem("listaProductos"))

console.log(listaProductosLS);

//"este es el contenedor (contenedorIndex) de las card en html"
let contenedorIndex = document.getElementById("contenedor")
console.log(contenedorIndex); 

//ahora necesita una arrow function, para crear las card automaticamente

const crearCard =(producto)=>{
    // el += agrega  a lo que ya tenia, algo asi como un acumulador
    contenedorIndex.innerHTML += `  <div class="card mx-3 my-3" style="width: 18rem;">
    <img src="${producto.url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">${producto.codigo}</p>
      <p class="card-text"> ${producto.precio}</p>
      <p class="card-text">${producto.descripcion} </p>
    </div>
  </div>
     `;
     
    }
    // recorro el array que traje de LocalStorage, para que me muestre una por una
    for (let index = 0; index < listaProductosLS.length; index++) {
       const element = listaProductosLS[index];    
       crearCard(element);    
    }