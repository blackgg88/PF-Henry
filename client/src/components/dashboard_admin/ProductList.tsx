import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin';

interface Props{
    id: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    images: string[];
    stock: number;
    rating: number;
    categories: string[];
}

const ProductList = (props: Props) => {
  return <List {...props}>
        <Datagrid>
            <TextField source='name' />
            <TextField source='price' />
            <TextField source='stock' />
            <TextField source='categories' />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
            <EditButton basePath='/products' />
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
            <DeleteButton basePath='/products' />
        </Datagrid>

    </List>
}

export default ProductList;