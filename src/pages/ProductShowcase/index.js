import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './productShowcase.css'
import inventory from '../../data/inventory'
import { useParams } from 'react-router';

const ProductShowcase = () => {
    const [quantity, setQuantity] = useState(1);
    const [showText, setShowText] = useState(false);

    const { id } = useParams()


    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const displayText = () => {
        setShowText(true)
        setTimeout(() => {
            setShowText(false)
        }, 1000);
    }

    useEffect(() => {

        return () => {
            clearTimeout(displayText)
        };
    }, []);

    const dispatch = useDispatch()
    const itemSelected = inventory.findIndex(item => item.title.replace(/\s+/g, "").trim() === id)

    const submitProduct = (e) => {
        e.preventDefault()
        displayText()

        const item = {
            ...inventory[itemSelected],
            quantity: Number(quantity)
        }

        dispatch({
            type: "ADDITEM",
            payload: item
        })
    }

    return (
        <div className="container">
            <div className='productShowcase'>
                <div className="productShowcase-body">
                    <div className="productShowcase-img">
                        <img src={process.env.PUBLIC_URL + `/img/${inventory[itemSelected].img}.png`} alt="mug" />
                    </div>
                </div>
            </div >
            <div className="productShowcase-info">
                <p className='productShowcase-title'>{inventory[itemSelected].title}</p>
                <p className='productShowcase-price'>Prix: {inventory[itemSelected].price}€</p>
                <form onSubmit={submitProduct}>
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" min="1" max="99" value={quantity} onChange={handleQuantity} />
                    <button>Ajouter au panier</button>
                    {showText && <p className='productShowcase-add'>Ajouter au panier x{quantity}</p>}
                </form>
            </div>
        </div>
    );
};

export default ProductShowcase;