import React from 'react';
import { Admin, Resource, Layout  } from 'react-admin';
import UserIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PaidIcon from '@mui/icons-material/Paid';
import ProductList from './ProductList';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';
import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import PurchaseList from './PurchaseList';
import PostList from './foro/PostList';
import PostCreate from './foro/PostCreate';
import PostEdit from './foro/PostEdit';
import { Dashboard } from './Dashboard/Dashboard';
import { MyAppBar } from './MyAppBar';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             @ts-ignore
import dataProvider from './dataProvider';
const MyLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />;
// console.log(dataProvider);

const AppAdmin = () => {
  return (
    <div>
      <Admin basename='/admin' dataProvider={dataProvider} dashboard={Dashboard} layout={MyLayout}>
        <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource
          name='products'
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          icon={LocalGroceryStoreIcon}
        />
        <Resource name='purchases' list={PurchaseList} icon={PaidIcon}/>
        <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} icon={TextSnippetIcon} />
      </Admin>
    </div>
  );
};

export default AppAdmin;
