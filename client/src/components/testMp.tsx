import { useState, useEffect } from 'react';
import { PUBLIC_KEY } from '../../config';

const TestMp = () => {
  const [producto, setProducto] = useState({
    name: 'product name',
    price: 50,
    quantity: 1,
    description: 'product description',
  });

  const handleFetched = async () => {
    const response = await fetch('http://localhost:3001/createPreference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });

    const data = await response.json();

    console.log(data.response.id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    const mp = new MercadoPago(PUBLIC_KEY, {
      locale: 'es-AR',
    });

    mp.checkout({
      preference: {
        id: data.response.id,
      },
      render: {
        container: '.cho-container',
        label: 'Pagar',
      },
    });
  };
  return (
    <div className='cho-container'>
      <button onClick={handleFetched}>Checkout</button>
    </div>
  );
};

export default TestMp;
