import React from 'react'
import './Card.css';
import CardImages1 from '../Cards/images/Image 1.jpg';
import CardImages2 from '../Cards/images/Image 2.jpg';
import CardImages3 from '../Cards/images/Image 3.jpg';
import CardImages4 from '../Cards/images/Image 4.jpg';
import CardImages5 from '../Cards/images/Image 5.jpg';
import CardImages7 from '../Cards/images/Image 7.jpg';


const Items = () => {
    

    const items = [
        {
            id: 1,
            name: 'Civil Engineering',
            image: <img src={CardImages5} alt="card--images"  style={{width:`90%`}}></img>

        },
        {
            id: 2,
            name: 'Health Care',
            image: <img src={CardImages4} alt="card--images" style={{width:`90%`}}></img>

        },
        {
            id: 3,
            name: 'Financial Services',
            image: <img src={CardImages3} alt="card--images" style={{width:`100%`}}></img>

        },
        {
            id: 4,
            name: 'Information Technology',
            image: <img src={CardImages7} alt="card--images" style={{width:`100%`}}></img>

        },
        {
            id: 5,
            name: 'Procurement & Supply Chain',
            image: <img src={CardImages2} alt="card--images" style={{width:`100%`}}></img>

        },
        {
            id: 6,
            name: 'Education',
            image: <img src={CardImages1} alt="card--images" style={{width:`100%`}}></img>

        },
        {
            id: 7,
            name: 'Government',
            image: <img src={CardImages1} alt="card--images" style={{width:`100%`}}></img>

        },
        {
            id: 8,
            name: 'Human Resources',
            image: <img src={CardImages5} alt="card--images" style={{width:`100%`}}></img>

        }
    ]

    return (
        <div className='item--wrapper'>
            {items.map(item => (
                <div className='items' key={item.id}>
                    <h4>{item.image}</h4>
                    <h3>{item.name}</h3>
                </div>

            )
            )}
        </div>
    )
}

export default Items