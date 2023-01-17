
export function productFetch() {
    const data = fetch('http://localhost:3001/products')
    .then( res => res.json())
    .then( res => res)
    return data
}