import React, {useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { controllerUser } from './controller';

// creame una interface para este estado const { purchase, setPurchase} = useState ([]) ; 
    interface purchase {
        id: string;
        name: string;
        price: number;
        description: string;
        brand: string;
        quantity: number;
        images: string[];
        categories_id: string;
    }



export const Dashboard_user = async () => {
    const { user, isAuthenticated } = useAuth0();
    const [purchase, setPurchase] = useState<purchase[]>([]);

     const email= 'arrascaetaefdev@gmail.cteom';

     const verresp= await (controllerUser(email))
     console.log(verresp)
  useEffect(()=> {
    if (isAuthenticated) {
        setPurchase=controllerUser(email)
    }
},[])    
console.log(controllerUser(email))

  return (
    <div>
        <div>
                <h2>{user?.name}</h2>
                <h2>{email}</h2>
                <img src={user?.picture} alt="picture-profile" />
        </div>

        <div>
            <h1>Mis datos</h1>
            <h1>Gestionar tus datos personales</h1>
        </div>
        <div>
            <h1>MIS COMPRAS</h1>
            {}
        </div>
    </div>
  )
}
