import React from 'react'
import { Admin, Resource } from 'react-admin';
import ProductList from './ProductList';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';
import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import PurchaseList from './PurchaseList';
import { Dashboard } from './Dashboard';
{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
import dataProvider from './dataProvider';

const AppAdmin = () => {
  return (    
  <div>

    <Admin basename="/admin"  dataProvider={dataProvider} dashboard={Dashboard} >
            <Resource name="users"  list={UserList} edit={UserEdit} create={UserCreate} />
            <Resource name="products"  list={ProductList} edit={ProductEdit} create={ProductCreate}/>
            <Resource name="purchases" list={PurchaseList}/>
    </Admin>
    </div>
      
  )
}

export default AppAdmin;