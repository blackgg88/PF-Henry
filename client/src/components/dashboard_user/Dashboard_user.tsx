import React, {useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { controllerUser } from './controller';
import { is } from 'immer/dist/internal';

// creame una interface para este estado const { purchase, setPurchase} = useState ([]) ; 
    interface items {
        title:string;
        id: string;
        price: number;
        description: string;
        quantity: number;
    }

    interface preference {
    date_create: string,
    items: items[]   
    }



export const Dashboard_user = () => {

    const { user, isAuthenticated } = useAuth0();
    const [purchase, setPurchase] = useState<preference[]>([]);
    //purchase [{}, {}]

     const email= 'arrascaetaefdev@gmail.com';
   

    useEffect( ()=> {

        const handleGetItems = async () => {
            const response = await controllerUser(email);

            response.map((preference: any )=> {
                
                setPurchase([...purchase, {date_create: preference.date_created, items: preference.items}])
            })
        }
        if (isAuthenticated) {            
            handleGetItems();
        }

        
    }, [isAuthenticated])
     
    interface Product {
        title: string;
        quantity: number;
        }

        console.log(purchase);
        

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
            {
                // purchase.map( product => (
                //     <div key={product.id}>
                //         <h1>{product.title}</h1>
                //         <h1>{product.quantity}</h1>
                //     </div>
                // ))
            }
        </div>
    </div>
  )
}