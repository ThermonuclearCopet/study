import { useSelector } from "react-redux";
import './Cart.css';
import CartItem from "../components/CartItem/CartItem";

const CartPage = () => {
    const cart = useSelector(state => state.cart);

    return <section className="cart-page-section">
        <p className="cart-page-title">Shopping Cart</p>
        {
            Object.entries(cart).map((el, idx) => (
                <CartItem item={el[1]} key={idx}/>
            ))
        }
        {
            Object.entries(cart).length > 0 &&
            <p className="cart-page-title">{`Total: ${
                Object.entries(cart).reduce((acc, curr) => (
                    acc + curr[1].quantity * parseInt(curr[1].price.replace(/\s/g, ''))
                ), 0)
            }$`}</p>
        }
    </section>
}

export default CartPage;
