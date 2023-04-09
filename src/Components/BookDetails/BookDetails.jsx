import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookData = useLoaderData();
    const { image, title, subtitle, price } = bookData;
    return (
        <div>
            <div className="mx-auto card w-6/12 bg-base-100 shadow-xl mt-12">
                <figure><img className='w-3/5' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{subtitle}</p>
                    <div className="card-actions justify-end">
                        <p>Price: ${price}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;