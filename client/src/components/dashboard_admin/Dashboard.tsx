import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, Paper, Box } from "@mui/material";
import UserIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PaidIcon from '@mui/icons-material/Paid';
{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
            // {/* para que no tire errores le ponemos resource en vez de basePath */}
import dataProvider from './dataProvider.js';

export const Dashboard = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [purchasesCount, setPurchasesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // const usersResponse = await dataProvider.getList('users');
      // const productsResponse = await dataProvider.getList('products');
      // const purchasesResponse = await dataProvider.getList('purchases');
      
      // setUsersCount(usersResponse.data.length);
      // setProductsCount(productsResponse.data.length);
      // setPurchasesCount(purchasesResponse.data.length);
      const dataUsers = await fetch('http://localhost:3001/users').then((res) => res.json());
      const dataProducts = await fetch('http://localhost:3001/products').then((res) => res.json());
      const dataPurchases = await fetch('http://localhost:3001/checkout').then((res) => res.json());

      // console.log(data.length);
      setUsersCount(dataUsers.length);
      setProductsCount(dataProducts.length);
      setPurchasesCount(dataPurchases.length);

    };

    fetchData();
  }, []);

  return (
    <Card className='main'>
      <CardHeader title="Welcome to the administration" />

      <img src="https://res.cloudinary.com/dg1roy34p/image/upload/v1674830963/SmartNest/logo_smart_b130x90_k1idwg.png"></img>
      <CardContent className='dashboardAdmin_wrapper'>
        <Card variant="outlined" className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'><UserIcon/></div>
          <h2 >Users registered</h2>
          <p>{usersCount}</p>
        </Card>
        <Card variant="outlined"  className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'><LocalGroceryStoreIcon/></div>
          <h2>Products</h2>
          <p> {productsCount}</p>
        </Card>
        <Card variant="outlined"  className='dashboardAdmin_card'>
          <div className='dashboardAdmin_icon'><PaidIcon/></div>
          <h2>Purchases</h2>
          <p>{purchasesCount}</p>
        </Card>
      </CardContent>
      
    </Card>
  );
};