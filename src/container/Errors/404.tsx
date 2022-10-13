import { Link } from 'react-router-dom';

import './styles/404.css'


function NotFound() {

  return (
    <section id='NotFound'>
        <div className='mx-4'>
            <div className='mx-auto max-w-screen-sm text-center'>
                <h1 id='NotFoundTitle'>
                    404
                </h1>
                <p id='NotFoundDesc1'>
                    Something's missing.
                </p>
                <p id='NotFoundDesc2'>
                    Sorry, we don't have that page. Perhaps you've missed typed it?
                </p>
                <Link to={`/`} id='NotFoundLink'>
                    Go Home
                </Link>
            </div>   
        </div>
    </section>
  );
};

export default NotFound;