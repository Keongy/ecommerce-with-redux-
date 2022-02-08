import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import './cart.css'

const Cart = () => {
    const [quantity, setQuantity] = useState(0);

    const products = useSelector(state => state.cart)

    useEffect(() => {
        var totalProducts = 0
        products.map(product => {
            return totalProducts += Number(product.quantity)
        })
        setQuantity(totalProducts)
    }, [products]);


    return (
        <div className='cart-container'>
            <div className="cart-body">
                <AiOutlineShoppingCart size={'1em'} />
                <div className="cart-quantity">
                    <div className="cart-quantity-total">
                        <p>{quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;