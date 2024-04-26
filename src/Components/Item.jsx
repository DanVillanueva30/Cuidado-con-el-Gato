/* eslint-disable react/prop-types */
const Item = ({item, addToCart}) => {
    return (
        <>
            <div className="item">
                <div className="item__imagen">
                    <img src={item.image} alt="Imagen item" />
                </div>
                <p className="item__nombre">{item.name}</p>
                <div className="item__descripcion">
                    <p className="item__talla">Talla: {item.size}<span className="item__talla--span"> </span> </p>
                    <p className="item__precio">${item.price}</p>
                </div>
                <button type="button" className="item__agregar-carrito" onClick={() => addToCart(item)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Item;