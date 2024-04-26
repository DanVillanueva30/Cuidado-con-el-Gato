/* eslint-disable react/prop-types */
const Header = ({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart}) => {

    const isEmpty = () => cart.length === 0;
    const cartTotal = () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0 );
    return (
        <header className="header">
            <div className="header__contenedor">
                <div className="header__grid">
                    <div className="header__logo">
                        <a href="index.html" className="header__heading">Cuidado con el gato</a>
                        <img className="header__img-gato" src="img/domestic-cat-shape_47197.png" alt="Icono de un gato" />
                    </div>
                    <div className="carrito " id="carrito">
                        <img src="img/cart.png" className="carrito__imagen" alt="Icono carrito" />

                        <div className="carrito__contenedor-contenido" >
                            <section className="carrito__contenido" id="contenido-carrito">
                                {isEmpty() ? (
                                    <p className="carrito__vacio-texto">¡Tu carrito está vacío!</p>
                                ) : (
                                    <>
                                        <section className="productos"> 
                                            {cart.map(item => (
                                                <div className="producto" key={item.id}>
                                                    <div className="img"> <img src={item.image} alt="Imagen producto" width="60px" height="80px" /> </div>
                                                    <div className="producto__resumen">
                                                        <p className="producto__nombre">{item.name}</p>
                                                        <div className="producto__grid">
                                                            <p className="producto__precio">${item.price}</p>
                                                            
                                                            <div className="producto__cantidad">
                                                                <p className="producto__cantidad-texto">Cantidad:</p>
                                                                <button 
                                                                    className="producto__boton" 
                                                                    type="button"
                                                                    onClick={() => decreaseQuantity(item.id)}
                                                                > - </button>
                                                                <span className="producto__cantidad--span">{item.quantity}</span>
                                                                <button 
                                                                    className="producto__boton" 
                                                                    type="button" 
                                                                    onClick={() => increaseQuantity(item.id)}
                                                                > + </button>
                                                            </div>
                                                            
                                                            <img className="producto__eliminar-carrito" src="./img/borrar.png" alt="Icono borrar" onClick={() => removeFromCart(item.id)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </section>
                                        <p className="carrito__total">Total a pagar:
                                            <span className="carrito__total-span"> ${cartTotal()}</span>
                                        </p>
                                    </>
                                )}


                                <div className="carrito__botones">
                                    <button type="button" className="carrito__vaciar" onClick={clearCart}>Vaciar carrito</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;