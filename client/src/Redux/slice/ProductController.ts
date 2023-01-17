import axios from 'axios'

export async function getAllProduct() {
    const { data } = await axios.get('http://localhost:3001/products');
    return data;
}

export function productFetch() {
    const data = fetch('http://localhost:3001/products')
    .then( res => res.json())
    .then( res => res)
    return data
}