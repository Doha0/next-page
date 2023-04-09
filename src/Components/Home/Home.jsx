import React from 'react';
import Lottie from "lottie-react";
import developer from '../../../public/developer.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-8 mt-12'>
            {/* left text */}
            <div>
                <div className="card w-9/12">
                    <div className="card-body">
                        <div className="badge badge-ghost
                         bg-yellow-400 p-3">On Sale!</div>
                        <h2 className="text-4xl font-bold">
                            A reader lives a thousand lives <div className=' text-sky-400'>before he dies</div>
                        </h2>
                        <p className='text-lg'>Books are a uniquely portable magic.
                            Books serve to show a man that those
                            original thoughts of his aren’t very
                            new after all. The man who does not
                            read good books is no better than
                            the man who can’t.</p>
                        <div className="card-actions justify-start">
                            <Link to='/books'><button className="btn bg-sky-400
                             hover:bg-blue-700 border-0">Visit Store</button></Link>
                            <Link to='/about'><button className="btn btn-ghost">Learn More</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* animation */}
            <div>
                <Lottie animationData={developer} loop={true} />;
            </div>
        </div>
    );
};

export default Home;