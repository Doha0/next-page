import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { title, subtitle, image, price, isbn13 } = book;
    // console.log(isbn13);
    return (
        <div>
            <Link to={`/books/${isbn13}`}>
                <div className=" w-10/12 bg-base-100
             shadow-xl rounded-none relative transition 
             duration-200 transform hover:-translate-y-2">
                    <div>
                        <img src={image} alt="Shoes" className='object-cover w-full h-80
                 px-6 py-4' />
                    </div>
                    <div className='px-6 py-4 bg-black text-white bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 rounded transition-opacity duration-200 flex flex-col'>
                        <h2> {title} </h2>
                        <h4> {subtitle.substring(0, 45)}... </h4>
                        <h6 className='mt-auto'>Price: ${price} </h6>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;