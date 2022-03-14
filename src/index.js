import {render} from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import App from './App';

import Scoreboard from "./components/Scoreboard";

const rootElement = document.getElementById("root")
render (
<Provider store={store}>
  <BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="scoreboard" element={<Scoreboard/>}/>
</Routes>
</BrowserRouter></Provider>, rootElement);
