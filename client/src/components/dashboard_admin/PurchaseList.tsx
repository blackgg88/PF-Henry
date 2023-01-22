import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const PurchaseList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <TextField source='Payer' />
        <TextField source='Products' />
        <TextField source='Date_of_Purcharse' />
        <TextField source='Status' />
        <TextField source='Status_Detail' />
        <TextField source='Total_Paid' />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}
        <DeleteButton basePath='/purchases' />
      </Datagrid>
    </List>
  );
};

export default PurchaseList;
