import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './estrellas.css';

export function Estrellas() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            className='star'
                            size={50}
                            color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}
