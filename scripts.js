let listaProductos = [
  {
    id: 1,
    nombre: "Mario Kart 8",
    precio: 100000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo.com%2Fph%2Fswitch%2Faabp%2Fproduct.png&f=1&nofb=1&ipt=8a69074b448f2bdbc5af9d20a1188782c2c3fb6ac9e9ca939881b594eb6bb163",
  },
  {
    id: 2,
    nombre: "Zelda TOTK",
    precio: 95000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo-master.com%2Ffichiers%2F2022%2F9%2F13%2Fnswitch-thelegendofzeldatearsofthekingdom.jpg&f=1&nofb=1&ipt=7432eff180611d63e2253410cfdfbf06df003ba31c4da68678c53b7b9f14a42a",
  },
  {
    id: 3,
    nombre: "Animal Crossing",
    precio: 105000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F76%2Fc1%2Fcc%2F76c1cce1cb34aed4325d73738f7eaf51.png&f=1&nofb=1&ipt=8ed26a5033e6da92426e3573dce631516bf9f2717c0bf072ef725cd165837f14",
  },
  {
    id: 4,
    nombre: "Super Smash Bros Ultimate",
    precio: 87000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fn4jv213CGeaYvaHmwNOpOb_X4Q0CddoAQd2G90GAgkU.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3D19a4bfd205f79d16072c9ae5682ab536b8ad398e&f=1&nofb=1&ipt=454b3afa0ee398435ca391bb3ec5501a800f565851217ad6c2fe0bcebd3dd21e",
  },
  {
    id: 5,
    nombre: "Mario Oddyssey",
    precio: 102000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gamespot.com%2Fa%2Fuploads%2Fscale_medium%2F1197%2F11970954%2F3248235-smo.jpg&f=1&nofb=1&ipt=b02f7f924dc15b82ea0a62640a75bac3b405551970fc42b43faf6add2321b575",
  },
  {
    id: 6,
    nombre: "Mario Kart 8",
    precio: 100000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo.com%2Fph%2Fswitch%2Faabp%2Fproduct.png&f=1&nofb=1&ipt=8a69074b448f2bdbc5af9d20a1188782c2c3fb6ac9e9ca939881b594eb6bb163",
  },
  {
    id: 7,
    nombre: "Zelda TOTK",
    precio: 95000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo-master.com%2Ffichiers%2F2022%2F9%2F13%2Fnswitch-thelegendofzeldatearsofthekingdom.jpg&f=1&nofb=1&ipt=7432eff180611d63e2253410cfdfbf06df003ba31c4da68678c53b7b9f14a42a",
  },
  {
    id: 8,
    nombre: "Animal Crossing",
    precio: 105000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F76%2Fc1%2Fcc%2F76c1cce1cb34aed4325d73738f7eaf51.png&f=1&nofb=1&ipt=8ed26a5033e6da92426e3573dce631516bf9f2717c0bf072ef725cd165837f14",
  },
  {
    id: 9,
    nombre: "Super Smash Bros Ultimate",
    precio: 87000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fn4jv213CGeaYvaHmwNOpOb_X4Q0CddoAQd2G90GAgkU.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3D19a4bfd205f79d16072c9ae5682ab536b8ad398e&f=1&nofb=1&ipt=454b3afa0ee398435ca391bb3ec5501a800f565851217ad6c2fe0bcebd3dd21e",
  },
  {
    id: 10,
    nombre: "Mario Oddyssey",
    precio: 102000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gamespot.com%2Fa%2Fuploads%2Fscale_medium%2F1197%2F11970954%2F3248235-smo.jpg&f=1&nofb=1&ipt=b02f7f924dc15b82ea0a62640a75bac3b405551970fc42b43faf6add2321b575",
  },
  {
    id: 11,
    nombre: "Mario Kart 8",
    precio: 100000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo.com%2Fph%2Fswitch%2Faabp%2Fproduct.png&f=1&nofb=1&ipt=8a69074b448f2bdbc5af9d20a1188782c2c3fb6ac9e9ca939881b594eb6bb163",
  },
  {
    id: 12,
    nombre: "Zelda TOTK",
    precio: 95000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo-master.com%2Ffichiers%2F2022%2F9%2F13%2Fnswitch-thelegendofzeldatearsofthekingdom.jpg&f=1&nofb=1&ipt=7432eff180611d63e2253410cfdfbf06df003ba31c4da68678c53b7b9f14a42a",
  },
  {
    id: 13,
    nombre: "Animal Crossing",
    precio: 105000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F76%2Fc1%2Fcc%2F76c1cce1cb34aed4325d73738f7eaf51.png&f=1&nofb=1&ipt=8ed26a5033e6da92426e3573dce631516bf9f2717c0bf072ef725cd165837f14",
  },
  {
    id: 14,
    nombre: "Super Smash Bros Ultimate",
    precio: 87000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fn4jv213CGeaYvaHmwNOpOb_X4Q0CddoAQd2G90GAgkU.jpg%3Fwidth%3D960%26crop%3Dsmart%26auto%3Dwebp%26s%3D19a4bfd205f79d16072c9ae5682ab536b8ad398e&f=1&nofb=1&ipt=454b3afa0ee398435ca391bb3ec5501a800f565851217ad6c2fe0bcebd3dd21e",
  },
  {
    id: 15,
    nombre: "Mario Oddyssey",
    precio: 102000,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gamespot.com%2Fa%2Fuploads%2Fscale_medium%2F1197%2F11970954%2F3248235-smo.jpg&f=1&nofb=1&ipt=b02f7f924dc15b82ea0a62640a75bac3b405551970fc42b43faf6add2321b575",
  },
];

let carrito = [];

let buscador = document.getElementById("buscador");
let contenedorProductos = document.getElementById("contenedor-productos");
let contenedorCarrito = document.getElementById("items-carrito");
let contenedorTotalCarrito = document.getElementById("total-carrito");

buscador.addEventListener("keyup", filtrarProductos);

function filtrarProductos() {
  let valorInput = buscador.value.toLowerCase();
  let productosFiltrados = listaProductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(valorInput)
  );
  mostrarProductos(productosFiltrados, contenedorProductos);
}

function mostrarProductos(array, contenedor) {
  let htmlProductos = "";
  for (let i = 0; i < array.length; i++) {
    htmlProductos += `<div class="tarjeta-producto">
              <img src="${array[i].img}" alt="" />
              <h3>${array[i].nombre}</h3>
              <p>$ ${array[i].precio}</p>
              <button onClick="${
                contenedor.id === "contenedor-productos"
                  ? "agregarCarrito"
                  : "eliminarCarrito"
              }(${array[i].id})">${
      contenedor.id === "contenedor-productos"
        ? "Agregar al carrito"
        : "Eliminar del carrito"
    }</button>
            </div>`;
  }
  contenedor.innerHTML = htmlProductos;
}

function agregarCarrito(id) {
  let productoAgregar = listaProductos.find((producto) => producto.id === id);
  carrito.push(productoAgregar);
  mostrarProductos(carrito, contenedorCarrito);
  mostrarTotalCarrito(carrito);
}

function eliminarCarrito(id) {
  let indexProductoEliminar = carrito.findIndex(
    (producto) => producto.id === id
  );
  carrito.splice(indexProductoEliminar, 1);
  mostrarProductos(carrito, contenedorCarrito);
  mostrarTotalCarrito(carrito);
}

function mostrarTotalCarrito(array) {
  let html = "";
  let totalCarrito = 0;
  for (let i = 0; i < array.length; i++) {
    totalCarrito += array[i].precio;
  }
  html = `<div class="tarjeta-total">
            <h3>Precio Total Carrito</h3>
            <p>$ ${totalCarrito}</p>              
          </div>`;
  contenedorTotalCarrito.innerHTML = html;
}

function init() {
  mostrarProductos(listaProductos, contenedorProductos);
  mostrarProductos(carrito, contenedorCarrito);
  mostrarTotalCarrito(carrito);
}

init();
