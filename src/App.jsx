import { useState, useEffect } from "react"
import Header from "./Components/Header";
import Item from "./Components/Item";
import Footer from "./Components/Footer";
import { db } from "./data/db"
function App() {

    function initialCart() {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 9;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item) {
        //Verificar si el item ya existe en el carrito, si existe aumentar la cantidad.
        const itemExists = cart.findIndex(product => product.id === item.id);
        if(itemExists >= 0) {
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++
            setCart(updatedCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }
    
    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([])
    }

    return (
        <>
            <Header 
                cart={cart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                clearCart={clearCart}
            />
            <main className="main">
                <div className="main__contenedor">
                    <div id="items" className="items">
                        <h2 className="items__heading">Todos los productos</h2>
                        <div className="items__grid">
                            {data.map(item => (
                                <Item 
                                    item={item}
                                    key={item.id}
                                    addToCart={addToCart}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
