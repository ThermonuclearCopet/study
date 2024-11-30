import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
    const { name, quantity, price } = item;
    const intPrice = parseInt(price.replace(/\s/g, ''));
    const [finalQuantity, setFinalQuantity] = useState(quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateItem({ name: name, quantity: finalQuantity, price: price }));
    }, [dispatch, finalQuantity, name, price])

    return <div className="cart-page-item">
        <p>{name}</p>
        <Counter onChange={(value) => {setFinalQuantity(value)}} />
        <p>{intPrice * finalQuantity}</p>
        <button onClick={() => {dispatch(removeItem(name))}}>delete</button>
    </div>
}

export default CartItem;
