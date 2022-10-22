import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const WasteData = () => (
    <List>
        <Datagrid>
            <TextField source="nature" />
            <TextField source="weight" />
            <TextField source="old" />
            <TextField source="location" />
            <TextField source="image" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
