import React from 'react'


const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {id, nombre, precio }= producto;

    // agregar producto al carrito
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id )[0];// AQUI TAMBOEN SE PUEDE PONER EL [0] AL TERMINAR )[0]; ASI
        // el [0] es para que tome el dato directo y no cree un arreglo nuevo
       // console.log(producto[0]);
        agregarProducto([
            ...carrito,producto
        ]);

    }

    // Eliminar un producro del Carrito
        const eliminarProducto = id =>{
            const productos = carrito.filter( producto => producto.id !== id);
            agregarProducto(productos);
        }

    return ( 

        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            

            {productos
            ?
                <button 
                    type='button' 
                    onClick={ ()=> seleccionarProducto(id) }
                >Comprar</button>
            :
                <button 
                    type='button'
                    onClick={ ()=> eliminarProducto(id)}    
                >Eliminar</button>
            }
        </div>
     );
}
 
export default Producto;