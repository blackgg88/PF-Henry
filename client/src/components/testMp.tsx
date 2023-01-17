import { useState, useEffect } from 'react'
import { PUBLIC_KEY } from '../../config'
import { Link } from 'react-router-dom'

const TestMp = () => {
  const [producto, setProducto] = useState({
    id: 230,
    category_id: 'Safety and Security',
    name: 'product name UwU',
    price: 50,
    quantity: 1,
    description: 'product description',
  })

  useEffect(() => {
    const checkout = async () => {
      const response = await fetch('http://localhost:3001/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      })

      const data = await response.json()

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      const mp = new MercadoPago(PUBLIC_KEY, {
        locale: 'es-AR',
      })

      mp.checkout({
        preference: {
          id: data.id,
        },
        render: {
          container: '.cho-container',
          label: 'Pagar',
        },
      })
    }

    checkout()
  }, [])

  return (
    <>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <div className='cho-container'></div>
    </>
  )
}

export default TestMp
