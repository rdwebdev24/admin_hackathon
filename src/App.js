import * as React from "react";
import { Admin , ListGuesser , Resource} from 'react-admin';
import { dataProvider } from "./Components/DataProvider";
import {WasteData} from './Components/WasteData/WasteData'


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="task" list={WasteData} />
    </Admin>
);

export default App;

