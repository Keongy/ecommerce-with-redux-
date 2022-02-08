import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const [favorite, setFavorite] = useState(false);

    //For an update later...
    const addFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <Link to={`/products/${data.title.replace(/\s+/g, "").trim()}`} className="card-link">
            <div className='card'>
                <div className="card-body">
                    <div className="card-img">
                        <img src={process.env.PUBLIC_URL + `/img/${data.img}.png`} alt="mug" />
                    </div>
                    <div className="card-favorite" onClick={addFavorite}>
                        {!favorite ? <AiOutlineHeart /> : <AiFillHeart color='red' />}
                    </div>
                </div>
                <div className="card-footer">
                    <p>{data.title}</p>
                    <p>Prix: {data.price}</p>
                </div>
            </div >
        </Link>
    );
};

export default Card;