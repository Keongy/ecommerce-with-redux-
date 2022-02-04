import React from 'react';
import shopimg from '../../img/shopimg.jpg'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenue au Shop</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi veniam architecto perferendis aspernatur nostrum deleniti. Vitae quos nam maxime consectetur nobis quia tenetur omnis, pariatur veniam officia assumenda! Dicta, minus.
            </p>
            <p>Iusto necessitatibus libero reprehenderit. Provident velit quae asperiores necessitatibus cupiditate quod. Corporis sequi, enim alias possimus maiores, explicabo facere, repudiandae veniam laboriosam vero cupiditate nisi nulla placeat quos ipsum eveniet.
                Voluptates molestiae, doloremque rerum animi aperiam, eaque itaque commodi consequatur ipsa a possimus magnam rem ea tempora laudantium ex vel expedita. Quam, incidunt? Deserunt saepe, voluptatem voluptatum mollitia aperiam dicta.</p>
            <img src={shopimg} alt="" />
        </div>
    );
};

export default Home;