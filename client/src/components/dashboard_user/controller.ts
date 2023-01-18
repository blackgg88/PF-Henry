export const controllerUser = async (email: any)=>{
    const response = await fetch(`http://localhost:3001/checkout?email=${email}`)
    const data = await response.json();
    return data.item;
}
