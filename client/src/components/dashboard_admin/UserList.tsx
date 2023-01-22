import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

interface Props {
    id: string;
    userName: string;
    email: string;
}

const UserList = (props: Props) => {
  return <List {...props}>
    <Datagrid>
        <TextField source='_id' />
        <TextField source='userName' />
        <EmailField source='email' />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
        <EditButton basePath='/users' />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
        <DeleteButton basePath='/users' />
    </Datagrid>

  </List>
}

export default UserList;