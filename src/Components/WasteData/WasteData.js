import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const WasteData = () => (
    <List>
        <Datagrid>
            <TextField source="weight" />
            <TextField source="nature" />
            <TextField source="location" />
            <TextField source="Percentage_co2_Emmission" />
        </Datagrid>
    </List>
);
