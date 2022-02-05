import React, { useEffect, useState } from 'react';
import './shoppingCart.css'

const ShoppingCart = ({ productsQuantity, updateProductsQuantity }) => {
    const [quantity, setQuantity] = useState(productsQuantity);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalProduct = 0
        let price = 0;
        quantity.map(item => {
            return (
                price = price + (item.product.price * item.quantity),
                totalProduct = parseInt(totalProduct) + parseInt(item.quantity)
            )
        })
        setTotal(Math.round((price) * 100) / 100)


    }, [quantity]);


    const handleQuantity = (e, index) => {
        let tmp = [...quantity]
        tmp[index].quantity = e.target.value
        setQuantity(tmp)
        updateProductsQuantity(tmp)
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
                        {quantity.map((product, index) => {
                            return <div key={index} className="shopping-cart-product">
                                <div className="shopping-cart-product-left">
                                    <img src={process.env.PUBLIC_URL + `/img/${product.product.img}.png`} alt="mug" />
                                    <div className="shopping-cart-info">
                                        <h4>{product.product.title}</h4>
                                        <p>Prix: {product.product.price}€</p>
                                    </div>
                                </div>
                                <form>
                                    <label htmlFor="quantity">Quantité</label>
                                    <input type="number" min="1" max="99" value={quantity[index].quantity} onChange={(e) => handleQuantity(e, index)} />
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