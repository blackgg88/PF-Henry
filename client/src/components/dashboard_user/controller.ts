export const controllerUser = (email: string) => {
  const response = fetch(`http://localhost:3001/checkout/${email}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
