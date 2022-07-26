import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"
import Layout from "./layout";
import Home from "./components/home";
import Login from "./components/Login/Login";
import theme from './theme/index'
import Test from "./components/Test";
const App = () => {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />}></Route>
            <Route path="/Login" element={<Login />}></Route>
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
