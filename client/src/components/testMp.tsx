import { useState, useEffect } from 'react';
import { PUBLIC_KEY } from '../../config';
import { Link } from 'react-router-dom';

const TestMp = () => {
  const [producto, setProducto] = useState([
    {
      id: '63c6db43f46e034dfcbeea9c',
      name: 'Kasa Indoor Pan/Tilt Smart Security Camera',
      price: 22.43,
      description:
        'Live Steam from Anywhere with Pan/Tilt: Sharp and clear 1080p Full HD provides high quality video right in the palm of your hand. Swipe up, down, left and right on your phone to rotate and set your camera’s point of view in real-time',
      brand: 'Kasa',
      quantity: 5,
      images: [
        'https://m.media-amazon.com/images/I/61FYGI4BVoL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/51lGcD26GoL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/61aVNOoJ1sL._AC_SL1000_.jpg',
        'https://m.media-amazon.com/images/I/61x70KDJ16L._AC_SL1000_.jpg',
      ],

      categories_id: '63bebc5f001d5278f72b926a',
    },
  ]);

  useEffect(() => {
    const checkout = async () => {
      const response = await fetch('http://localhost:3001/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      const data = await response.json();

      console.log(data);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      const mp = new MercadoPago(PUBLIC_KEY, {
        locale: 'es-AR',
      });

      mp.checkout({
        preference: {
          id: data.id,
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        },
      });
    };

    checkout();
  }, []);

  return (
    <>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <div className='cho-container'></div>
    </>
  );
};

export default TestMp;
