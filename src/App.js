import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import "./App.css";

function App() {
  // crear listado de productos

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa React", precio: 50 },
    { id: 2, nombre: "Camisa Angular", precio: 40 },
    { id: 3, nombre: "Camisa Vue", precio: 30 },
    { id: 4, nombre: "Camisa Otro", precio: 20 },
  ]);

  // state de carrito de compra

  const [carrito, agregarProducto] = useState([]);
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual" /> 
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito} 
        agregarProducto={agregarProducto}
      />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
