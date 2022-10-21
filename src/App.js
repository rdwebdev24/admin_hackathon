import * as React from "react";
import { Admin , ListGuesser , Resource} from 'react-admin';
import { dataProvider } from "./Components/DataProvider";
import { Signin } from "./Components/Signin/Signin";
import {WasteData} from './Components/WasteData/WasteData'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    // <Admin dataProvider={dataProvider}>
    //     <Resource name="task" list={WasteData} />
    // </Admin>
    <div className="app">
    <Signin/>
    </div>
);

export default App;

