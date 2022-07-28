import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./layout";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import Solved from "./components/Solved/Solved";
import List from "./components/List/List";
import Temp from "./components/Temp/temp";


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
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/List" element={<List />} />
            <Route path="/Solved" element={<Solved />} />
            <Route path="temp" element={<Temp/>}/>
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <App theme={theme} />
  </ChakraProvider>
)
