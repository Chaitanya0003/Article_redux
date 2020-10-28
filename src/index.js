import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {Provider} from "react-redux";
import Routing from "./component/Routing";

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>, document.getElementById('root')
)