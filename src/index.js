import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import Layout from "./layout";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import theme from './theme/index'

const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<ChakraProvider>
  <App theme={theme}/>
  </ChakraProvider>)
