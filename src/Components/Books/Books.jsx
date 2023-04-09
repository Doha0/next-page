import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const { books } = useLoaderData();
    // const { isbn13 } = books;
    console.log(books);
    return (
        <div className='grid grid-cols-4 gap-8 mt-12'>
            {/* card */}
            {
                books?.map(book => <Book

                    key={book?.isbn13}
                    book={book}
                ></Book>)
            }
        </div>

    );
};

export default Books;