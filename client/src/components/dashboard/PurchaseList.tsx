import React from 'react'
import { List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton } from 'react-admin';

const PurchaseList = () => {
  return <List>
    <Datagrid>
        <TextField source='id' />
        <TextField source='client_id' />
        <TextField source='products' />
        <DateField source='date' />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
        <DeleteButton basePath='/purchases' />
    </Datagrid>
  </List>
}

export default PurchaseList;