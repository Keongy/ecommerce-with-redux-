import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import inventory from '../../data/inventory';
import './shoppingCart.css'

const ShoppingCart = () => {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(50);
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()


    useEffect(() => {
        let totalProduct = 0
        let price = 0;
        products.map(product => {
            return (
                price = price + (product.price * product.quantity),
                totalProduct = parseInt(totalProduct) + parseInt(product.quantity)
            )
        })
        setTotal(Math.round((price) * 100) / 100)


    }, [products]);



    const handleQuantity = (e, product) => {

        const indexProduct = products.findIndex(item => item.id === product)
        const updateItem = {
            ...products[indexProduct],
            quantity: Number(e.target.value)
        }


        dispatch({
            type: "UPDATEITEM",
            payload: updateItem,
        })
    }





    return (
        <div className='shopping-cart'>
            {total === 0 ? (
                <h1>Votre panier est vide !</h1>
            )
                :
                (
                    <>
                        <h3>Votre panier :</h3>
                        {products.map(product => {
                            return <div key={product.id} className="shopping-cart-product">
                                <div className="shopping-cart-product-left">
                                    <img src={process.env.PUBLIC_URL + `/img/${product.img}.png`} alt="mug" />
                                    <div className="shopping-cart-info">
                                        <h4>{product.title}</h4>
                                        <p>Prix: {product.price}€</p>
                                    </div>
                                </div>
                                <form>
                                    <label htmlFor="quantity">Quantité</label>
                                    <input type="number" min="1" max="99" value={product.quantity} onChange={(e) => handleQuantity(e, product.id)} />
                                </form>
                            </div>
                        })}
                        <div className="shopping-cart-footer">
                            <h3>Total : {total}€</h3>
                        </div>
                        <div className="shopping-cart-payment">
                            <button>Procéder au paiement</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ShoppingCart;