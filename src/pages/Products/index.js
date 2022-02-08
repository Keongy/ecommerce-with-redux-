import React from 'react';
import Card from '../../components/Card/index';
import './products.css'
import data from '../../data/inventory'

const Products = () => {
    return (
        <div className='products'>
            {data.map(el => {
                return (
                    <Card
                        key={el.id}
                        data={el}
                    />
                )
            })}
        </div>
    );
};

export default Products;