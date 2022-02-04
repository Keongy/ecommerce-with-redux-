import { AiOutlineShoppingCart } from "react-icons/ai";
import './cart.css'

const Cart = ({ totalProduct }) => {


    return (
        <div className='cart-container'>
            <div className="cart-body">
                <AiOutlineShoppingCart size={'1em'} />
                <div className="cart-quantity">
                    <div className="cart-quantity-total">
                        <p>{totalProduct}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;